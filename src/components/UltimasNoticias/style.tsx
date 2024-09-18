import styled, {css, createGlobalStyle} from "styled-components";

export const Columns = styled.div`
    gap: 32px 0;
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        gap: 0 32px
    }
`;

export const Column = styled.div`
    gap: 32px 0;
    margin: 0 -16px;
`;

export const Container = styled.div`

`;

export const Content = styled.section`
   
`;