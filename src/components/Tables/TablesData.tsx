"use client";
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useEffect, useState } from 'react';
import { TableHead } from '@mui/material';

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

export default function TablesData(props: any) {  
  const [page, setPage] = React.useState(0);

  const [rowsPerPageOptions, setrowsPerPageOptions] = useState([{ label: 'Tudo', value: -1 }]);
  const [keys, setKeys] = useState([]);
  
  const [rowsPerPage, setRowsPerPage] = React.useState(-1);

  const TablePaginationActions = (props: TablePaginationActionsProps) => {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onPageChange(event, page + 1);
    };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
      </Box>
      );
  }
  
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - props?.data.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    if(props) {
      if(props?.config?.field_items_per_page && props?.config?.field_items_per_page[0]) {
        setrowsPerPageOptions([
          ...rowsPerPageOptions,
          ...props?.config?.field_items_per_page[0]?.value.split(",").map((string: any) => {
            return {
              label: string,
              value: string
          }})  
        ])
      }
      if(props?.config?.field_key && props?.config?.field_key[0]) {
        setKeys(props?.config?.field_key[0]?.value.split(",").map((string: any) => {
          return string.trim()  
        }));
      }
    }
  }, []);   

  return (
    <TableContainer className={props?.className} component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <>
              {keys && keys.length ? keys.map(function(key: any, i: number){
                  if(Object.keys(props?.data[0]).includes(key)) {
                    return (
                      <>
                        <TableCell key={i} component="th" scope="row">
                          {key.replaceAll('-', ' ')}
                        </TableCell>
                      </>                    
                    );
                  }
              }) : Object.keys(props?.data[0]).map(function(key: any, i: number){
                  return (
                    <>
                      <TableCell key={i} component="th" scope="row">
                        {key.replaceAll('-', ' ')}
                      </TableCell> 
                    </>
                  );
              })}            
            </>
          </TableRow>   
        </TableHead>
        
        <TableBody>       
          {(rowsPerPage > 0
            ? (props?.filter ? props?.filter.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : props?.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage))
            : (props?.filter ? props?.filter : props?.data)
          ).map((row: any, i: number) => (
            <>
              <TableRow key={i}>
                  {keys && keys.length ? keys.map(function(key: any, i: number){
                      if(Object.keys(props?.data[0]).includes(key)) {
                        return (
                          <TableCell key={i} component="th" scope="row">
                            {row[key]}
                          </TableCell>                    
                        );                      
                      }
                  }) : Object.keys(props?.data[0]).map(function(key: any, i: number){
                    return (
                      <TableCell key={i} component="th" scope="row">
                        {row[key]}
                      </TableCell>                    
                    );
                })}
              </TableRow>            
            </>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        
        {rowsPerPageOptions && rowsPerPageOptions.length > 1 && <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={rowsPerPageOptions}
              colSpan={3}
              count={props?.filter ? props?.filter.length : props?.data.length}
              rowsPerPage={rowsPerPage}
              labelDisplayedRows={({ from, to, count }) => false}
              labelRowsPerPage={false}
              page={page}
              slotProps={{
                select: { 
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>}
      </Table>
    </TableContainer>
  );
};