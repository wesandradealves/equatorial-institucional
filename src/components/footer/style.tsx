import styled, {css, createGlobalStyle} from "styled-components";

export const Container = styled.footer`
    background-color: ${props => props.theme.colorPrimary300};    
`;

export const Contact = styled.div`
    background-color: white;
    overflow: hidden;
    position: relative;
    .container {
        @media screen and (max-width: ${props => props.theme.screenLgMin}) {
            max-width: initial;
            padding: 0
        } 
    }
`;

export const ColText = styled.p`
    white-space: pre-line;
    color: ${props => props.theme.colorPrimary300}; 
    font-size: ${props => props.theme.fontDesktop.bodySmall1.fontSize};  
`;

export const ContactCol = styled.div`
    padding: 43px 24px;
    position: relative;
    &:first-of-type {
        @media screen and (min-width: ${props => props.theme.screenLgMin}) {
            padding-left: 0;
            & ~ :last-of-type {
                padding-right: 0
            }
        }     
    }
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        padding: 43px 48px;
    }     
    &.talktous {
        background-color: ${props => props.theme.colorPrimary100};
    }
    &.talktoclara {
        background-color: ${props => props.theme.colorHighlight300};
        &::after {
            content: "";
            position: absolute;
            top: 0;
            margin: 0 -1px;
            left: 100%;
            background: inherit;
            height: 100%;
            display: block;
            width: 100vw;
        }
        .inner {
            > span {
                padding-right: 100px;
            }
            img {
                position: absolute;
                right: 0;
                bottom: 0;
            }
        }
    }
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
