import styled, {css, createGlobalStyle} from "styled-components";

export const Content = styled.div`
   gap: 88px 0;
   padding-bottom: 88px;
   @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
      gap: 159px 0;
      padding-bottom: 179px;
   }
`;
