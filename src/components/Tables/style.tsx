import styled, {css, createGlobalStyle} from "styled-components";

export const Content = styled.section`   
   position: relative;

   &.has-mask {
      background: ${props => props.theme._colors.primary.primary100};
      margin-bottom: -88px;
      padding-top: 32px;
      z-index: 1;
      & + * {
         z-index: 2;
      }

      @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
         background: transparent;
         margin-bottom: -150px;
         padding-top: 0;
         content: "";
      }

      &::after {
         display: block;
         left: 0;
         bottom: -88px;
         @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
            bottom: -179px;
            content: "";
         } 
         position: absolute;
         z-index: 1;
         width: 100%;
         background: ${props => props.theme._colors.primary.primary100};
         height: 50%;
      }

      [class*="MuiTableContainer"] [class*="MuiTable"] {
         background: white;
         @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
            background-color: ${props => props.theme._colors.neutral.neutral200};
         }

         [class*="MuiTableFooter"] {
            background: ${props => props.theme._colors.primary.primary100};
            &::before {
               background-color: white;
               @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
                  background-color: ${props => props.theme._colors.neutral.neutral200};   
               }
            }
            * {
               background: transparent;
            }
         }       
      }  
   }
`;

export const Container = styled.div`   
   position: relative;
   z-index: 2;
   [class*="MuiTableContainer"] {
      box-shadow: none;
      [class*="MuiTable"] {
         border-spacing: 16px 24px;
         border-collapse: separate;
         border-radius: 16px;
         position: relative;
         background-color: ${props => props.theme._colors.neutral.neutral200};

         [class*="MuiTableHead"] {
            [class*="MuiTableRow"] {
               [class*="MuiTableCell"] {
                  background: ${props => props.theme._colors.primary.primary400};  
                  color: white;
                  padding: 8px 16px;
                  border-radius: 8px;   
                  font-weight: bold;   
                  text-transform: capitalize;          
               }
            }
         }

         [class*="MuiTableBody"] {
            &:after {
               content: '';
               display: block;
               height: 45px;
            }
         }

         [class*="MuiTableFooter"] {
            column-span: none; 
            display: flex;
            flex-flow: column;
            align-items: end;
            justify-content: end;
            position: absolute;
            right: 0;   
            width: 100%;
            border-radius: 0;
            border-collapse: collapse;    
            background: white;        

            &::before {
               border-radius: 0 0 16px 16px;
               background-color: ${props => props.theme._colors.neutral.neutral200};   
               content: "";        
               display: block;
               width: 100%;
               height: 45px; 
            }            

            * {
               border-radius: 0;
               border-collapse: collapse;
               background: white;
            }

            bottom: 0;

            [class*="MuiTableRow"] {
               [class*="MuiToolbar"] {
                  padding-top: 32px;
               }  
               [class*="MuiButtonBase"] {
                  border-radius: 999px;
                  border: 1px ${props => props.theme._colors.primary.primary300} solid;
                  color: ${props => props.theme._colors.primary.primary300};
                  &:hover {
                     color: white;
                     background: ${props => props.theme._colors.primary.primary300};
                  }
                  &:not(:first-of-type) {
                     margin-left: 12px;
                  }  
                  &[disabled] {
                     border-color: ${props => props.theme._colors.primary.primary400};
                     color: ${props => props.theme._colors.primary.primary400};
                  }
               }   
            }
         }

         [class*="MuiTableCell"] {
            border: 0;
            padding: 0;
            font-size: ${props => props.theme._fonts.desktop.bodyLarge1.fontSize}; 
         }         
      }
   }
`;

export const Label = styled.p`   
   font-weight: bold;
   font-size: ${props => props.theme._fonts.desktop.bodyLarge1.fontSize};
`;

export const FilterWrapper = styled.div`   
   gap: 0 8px
`;

export const Select = styled.select`   
   border: 0;
   background: transparent;
   color: white;
   outline: none;
   cursor: pointer;
   font-size: ${props => props.theme._fonts.desktop.bodyLarge1.fontSize};
   font-weight: bold;
`;

export const SelectWrapper = styled.div`   
   background: ${props => props.theme._colors.primary.primary300};   
   border-radius: 999px;
   padding: 8px 15px;
`;

export const Option = styled.option`   
   color: black;
`;

export const Mask = styled.svg`   
   position: absolute;
   bottom: 0;  
   left: calc(50% - 1500px);
   width: 3000px;
   z-index: 1;
   path {
      fill: ${props => props.theme._colors.primary.primary100};
   }
`;

export const Column = styled.div`   
   gap: 32px 0
`;