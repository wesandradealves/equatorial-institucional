import styled, {css, createGlobalStyle} from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.colorPrimary300};   
    color: white;
    .container {
        padding-top: 40px;
        padding-bottom: 40px;
        gap: 40px 0;
        @media screen and (min-width: ${props => props.theme.screenMdMin}) {
            padding-top: 48px;
            padding-bottom: 48px;
            gap: 0;
        }   
        @media screen and (max-width: ${props => props.theme.screenLgMin}) {
            max-width: initial
        }             
    }
`;

export const Copyright = styled.p`
    background-color: ${props => props.theme.colorPrimary300};   
    color: white;
    font-size: ${props => props.theme.fontDesktop.bodySmall1.fontSize}; 
`;
