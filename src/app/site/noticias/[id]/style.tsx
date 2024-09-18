import styled, {css, createGlobalStyle} from "styled-components";

export const PostContent = styled.section`
   &:first-of-type {
      .container {
         padding-top: calc(125px + 88px);
         @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
            padding-top: calc(220px + 179px);
         }
         img {
            max-width: 100%;
            height: auto;
            object-fit: cover;
         }
         gap: 32px 0;
      }
   }
`;