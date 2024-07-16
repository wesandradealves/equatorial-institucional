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

export const Summary = styled.div`  
    max-width: 535px;
    font-size: ${props => props.theme.fontDesktop.bodySmall1.fontSize};
    @media screen and (min-width: ${props => props.theme.screenMdMin}) {
        font-size: ${props => props.theme.fontDesktop.bodyLarge1.fontSize};
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
    font-size: ${props => props.theme.fontMobile.header1.fontSize}; 
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        font-size: ${props => props.theme.fontDesktop.header2.fontSize}; 
    }
    * {
        font-size: inherit;
    }
`;