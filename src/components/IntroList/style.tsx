import styled, {css, createGlobalStyle} from "styled-components";

export const Content = styled.section`  
    z-index: 3;
    position: relative;
    color: white;
    padding-top: 21.5vw;
    margin-top: -34.5vw;
    @media screen and (min-width: ${props => props.theme.screenSmMin}) {
        padding-bottom: 12.5vw;
        @media screen and (min-width: ${props => props.theme.screenMdMin}) {
            margin-top: -23.5vw;
            @media screen and (min-width: ${props => props.theme.screenLgMin}) {
                margin-top: -32.5vw;
                @media screen and (min-width: ${props => props.theme.screenXxlMin}) {
                    margin-top: -27.5vw;
                }
            }
        }
    }
    [class*="BlockTitle"] {
        text-align: left !important;
    }
`;

export const Container = styled.div`   
    position: relative;
    z-index: 4;
    &[class*="fluid"] {
        background: ${props => props.theme.colorPrimary400};
        margin-top: -1px;
        margin-bottom: -1px;
        padding-top: 66px;
        padding-bottom: 132px;        
        @media screen and (min-width: ${props => props.theme.screenLgMin}) {
            padding-top: 0;
            padding-bottom: 0;
        }
    }
`;

export const Column = styled.div`   

`;

export const List = styled.ul`   
    gap: 24px 0;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        margin: 0 -40px;
        gap: 58px 0;
    }
`;

export const ListItem = styled.li`  
    cursor: pointer;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        padding: 0 40px;
    }
    &:hover {
        [class*="fa"] {
            color: ${props => props.theme.colorHighlight300};
        }
    }
    border-bottom: 1px ${props => props.theme.colorNeutral100} solid;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        border-bottom: 0;
    }        
`;

export const Mask = styled.svg`   
    position: absolute;
    left: 0;
    width: 100%;
    z-index: 2;
    path {
        fill: ${props => props.theme.colorPrimary400};
    }    
    &.--top {
        top: 0;
    }
    &.--bottom {
        -moz-transform: scale(-1, -1);
        -o-transform: scale(-1, -1);
        -webkit-transform: scale(-1, -1);
        transform: scale(-1, -1);  
        &:not(.--backdrop) {
            left: -40vw;
            width: 152vw;
            bottom: -16vw;  
        }
        &.--backdrop {
            z-index: 4;
            -moz-transform: initial;
            -o-transform: initial;
            -webkit-transform: initial;
            transform: initial;    
            bottom: 0;
            @media screen and (min-width: ${props => props.theme.screenSmMin}) {   
                bottom: 0; 
                z-index: 1;                      
            }
            path {
                fill: ${props => props.theme.colorHighlight300};
                right: 0;
                left: initial;
            }
        }
    }    
`;

export const Text = styled.div`   
    font-size: ${props => props.theme.fontMobile.bodySmall1.fontSize};
`;

export const Title = styled.h3`   
    font-size: ${props => props.theme.fontMobile.subtitle1.fontSize};
`;

export const Arrow = styled.i`   
    flex: 0 0 auto;
    width: auto;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        width: 93px;
    }
`;

export const Inner = styled.div`   
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        border-bottom: 1px ${props => props.theme.colorNeutral100} solid;
    }
    padding-bottom: 24px;
    gap: 10px 0;
    position: relative;
    &:hover::after{
        width: 100%
    }
    &::after {
        transition: 250ms ease-in-out all;
        left: 0;
        background: ${props => props.theme.colorHighlight300};
        width: 0;
        height: 1px;
        bottom: -1px;
        position: absolute;
        content: "";
    }
`;