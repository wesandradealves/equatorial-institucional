import styled, {css, createGlobalStyle} from "styled-components";

export const SearchResults = styled.section`
   padding-top: 88px;
   @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
      padding-top: 179px;
   }
`;