import styled, {css, createGlobalStyle} from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme._colors.primary.primary500};   
    color: white;
    .container {
        padding-top: 40px;
        padding-bottom: 40px;
        gap: 40px 0;
        @media screen and (min-width: ${props => props.theme._breakpoints.mobile.md}) {
            padding-top: 48px;
            padding-bottom: 48px;
            gap: 0;
        }   
        @media screen and (max-width: ${props => props.theme._breakpoints.desktop.lg}) {
            max-width: initial
        }             
    }
`;

export const Copyright = styled.p`
    color: white;
    font-size: ${props => props.theme._fonts.desktop.bodySmall1.fontSize}; 
`;
