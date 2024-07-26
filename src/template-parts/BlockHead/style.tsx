import styled, {css, createGlobalStyle} from "styled-components";

export const Container = styled.div`
         
`;

export const Text = styled.div`
    font-size: ${props => props.theme.fontMobile.bodyLarge1.fontSize}; 
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        font-size: ${props => props.theme.fontMobile.subtitle1.fontSize}; 
    }
    max-width: ${props => props.theme.screenLgMin};
`;

export const BlockTitle = styled.div`
    font-size: ${props => props.theme.fontMobile.header1.fontSize};
    line-height: 2.5rem;
    
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        font-size: ${props => props.theme.fontDesktop.header3.fontSize};
    }

    * {
        font-size: inherit;
    }

    strong {
        font-weight: 600
    }         
`;

export const BlockHeading = styled.div`
    gap: 53px 0;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        padding-right: 60px;
    }    
`;
