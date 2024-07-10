import { HttpService } from '@/services';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { useContext, useEffect, useState } from 'react';
import styled from "styled-components";
import { LanguagesTypo } from '@/types/enums';
import LanguageProvider from './context';

export default function LanguageSwitcher() {
  const http = new HttpService();
  const [data, setData] = useState<LanguagesTypo | any>(null);
  const {lang, setLanguage} = useContext<any>(LanguageProvider);

  const fetchData = async(uri: any) => {
    let response:any[] = await http.get(uri)
    return response
  }  

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '&': {
      width: '100px !important',
      padding: '1px 12px !important',
      position: 'relative',  
      '&::after, &::before': {
        content: `"${data.find((l:any) => l?.key !== lang?.key)?.key.includes('-') ? data.find((l:any) => l?.key !== lang?.key)?.key.split("-")[0] : data.find((l:any) => l?.key !== lang?.key)?.key }"`,
        position: 'absolute',
        top: 2,
        left: 16,
        fontWeight: 600,
        fontSize: theme.fontDesktop.smallText1.fontSize,
        textTransform: 'uppercase',        
        height: '100%',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        padding: '3px 7px 7px',
      }, 
      '&::after': {
        left: 'initial',
        right: 16
      },       
    },    
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(14px)',
      '& + .MuiSwitch-track': {
        borderRadius: 999
      },      
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(calc(100% + 5px))',            
        '& .MuiSwitch-thumb:before': {
          content: `"${lang?.key.includes('-') ? lang?.key.split("-")[0] : lang?.key}"`
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: 'white',
      width: 39,
      height: 32,
      borderRadius: 999,
      top: 2,
      position: 'relative',
      '&::before': {
        color: 'black',
        content: `"${lang?.key.includes('-') ? lang?.key.split("-")[0] : lang?.key }"`,
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'uppercase',
        fontWeight: 600,
        fontSize: theme.fontDesktop.smallText1.fontSize,
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: 'rgba(255, 255, 255, .5) !important',
      borderRadius: 20 / 2,
    },
  }));

  useEffect(() => {
    if(!data) {
      fetchData('/api/languages/?v=1').then((response: LanguagesTypo | any) => {
        let languages = response?.data?.languages;

        if(response) setData(response?.data?.languages)
      }).catch(console.error);
    }
  }, []);  
  
  useEffect(() => {
    if(lang) localStorage.setItem("lang", lang?.key)
  }, [lang]);  

  useEffect(() => {
    if(data) setLanguage(!localStorage.getItem("lang") ? data.find((lang:any) => lang?.key == 'pt-br') : data.find((lang:any) => lang?.key == localStorage.getItem("lang")))
  }, [data]);    

  return (
    <>
      {data && <MaterialUISwitch  onChange={(e) => {
        setLanguage(data.find((l:any) => l?.key !== lang?.key))
      }} 

      defaultChecked={lang?.key !== 'pt-br' ? false : true} 

      sx={{ m: 1 }} />}
    </>
  );
};