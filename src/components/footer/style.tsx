import styled, {css, createGlobalStyle} from "styled-components";

export const Container = styled.footer`
    background-color: ${props => props.theme.colorPrimary300};    
`;

export const Contact = styled.div`
    background-color: white;
`;

export const ColText = styled.p`
    white-space: pre-line;
    color: ${props => props.theme.colorPrimary300}; 
    font-size: ${props => props.theme.fontDesktop.bodySmall1.fontSize};  
`;

export const ContactCol = styled.div`
    padding: 43px 48px;
`;

export const Anchor = styled.a`
    font-weight: bold;
    text-decoration: underline;
    margin-top: 16px;
    display: block;
    &:hover {
        text-decoration: none;
    }
`;
