import styled, {css, createGlobalStyle} from "styled-components";

export const Content = styled.section`   
`;

export const Container = styled.div`   
`;

export const Columns = styled.div`  
    gap: 48px 0;
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        gap: 94px 0;
    }
`;

export const Summary = styled.div`  
    max-width: 535px;
    font-size: ${props => props.theme._fonts.desktop.bodySmall1.fontSize};
    @media screen and (min-width: ${props => props.theme._breakpoints.mobile.md}) {
        font-size: ${props => props.theme._fonts.desktop.bodyLarge1.fontSize};
    }    
    p {
        font-size: inherit;
    }    
`;

export const Info = styled.div`   
    padding: 48px;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 2;
`;

export const Title = styled.h3`   
    color: inherit;
    font-size: ${props => props.theme._fonts.mobile.header1.fontSize}; 
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        font-size: ${props => props.theme._fonts.desktop.header2.fontSize}; 
    }
    * {
        font-size: inherit;
    }
`;