import styled, {css, createGlobalStyle} from "styled-components";

export const Content = styled.section`   
`;

export const Container = styled.div`   
`;

export const Columns = styled.div`  
    gap: 48px 0;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        gap: 94px 0;
    }
`;
