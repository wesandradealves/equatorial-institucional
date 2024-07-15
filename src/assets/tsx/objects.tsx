import styled, {css, createGlobalStyle} from "styled-components";

interface ButtonTypo {
    className?: string;
}

export const Button = styled.a<ButtonTypo>`
    align-items: center;
    text-align: center;
    gap: 0 8px;
    font-weight: 600;
    padding: 20px 32px;
    display: inline-flex;
    border-radius: 999px;
    color: black;
    font-size: ${props => props.theme.fontDesktop.bodyMedium1.fontSize};
    background-color: ${props => props.theme.colorHighlight300};
    border: 2px ${props => props.theme.colorHighlight300} solid;
    svg {
        position: relative;
    }
    &:hover {
        background-color: transparent;
        svg {
            right: -4px
        }
    }
`;

