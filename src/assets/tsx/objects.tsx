import styled, {css, createGlobalStyle} from "styled-components";

// 

export const Button = styled.a`
    align-items: center;
    text-align: center;
    gap: 0 8px;
    font-weight: 600;
    padding: 23px;
    display: inline-flex;
    border-radius: 999px;
    color: black;
    font-size: ${props => props.theme.fontDesktop.bodyMedium1.fontSize};
    background-color: ${props => props.theme.colorHighlight300};
`;