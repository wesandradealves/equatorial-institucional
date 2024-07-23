import styled, {css, createGlobalStyle} from "styled-components";

export const Container = styled.div`
         
`;

export const Text = styled.div`
    font-size: ${props => props.theme.fontMobile.bodyLarge1.fontSize}; 
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        font-size: ${props => props.theme.fontMobile.subtitle1.fontSize}; 
    }
    max-width: ${props => props.theme.screenLgMin};

    @media screen and (max-width: ${props => props.theme.screenSmMin}){
        text-align: center;
        width: 260px;
        font-size: ${props => props.theme.fontMobile.subtitle1.fontSize};
    }
`;

export const BlockTitle = styled.h2`
    font-size: 1.5rem;
    line-height: 2.5rem;
    
    br {
        @media screen and (max-width: ${props => props.theme.screenLgMin}) {
            display: none;
        }
    }
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        font-size: 2.5rem;
    }
    
    @media screen and (max-width: ${props => props.theme.screenSmMin}){
        width: 249px;
        font-size: ${props => props.theme.fontMobile.header1.fontSize};
    }
`;

export const BlockHeading = styled.div`
    gap: 53px 0;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        padding-right: 60px;
    }    
`;
