import styled, {css, createGlobalStyle} from "styled-components";

export const Content = styled.div`
   gap: 88px 0;
   @media screen and (min-width: ${props => props.theme.screenLgMin}) {
      gap: 179px 0;
   }
`;