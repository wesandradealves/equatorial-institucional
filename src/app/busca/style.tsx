import styled, {css, createGlobalStyle} from "styled-components";

export const SearchResults = styled.section`
   padding-top: 88px;
   @media screen and (min-width: ${props => props.theme.screenLgMin}) {
      padding-top: 179px;
   }
`;