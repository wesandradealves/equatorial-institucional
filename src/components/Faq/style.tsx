import styled, {css, createGlobalStyle} from "styled-components";

export interface FaqTypo {
    nobackground?: any;
}

export const Container = styled.div`
    position: relative;
    padding-bottom: 25px;
    padding-top: 48px;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        padding-top: 90px;
    }
    * {
        position: relative;
        z-index: 3;
    }
    [class*="Button"] {
        border-color: ${props => props.theme.colorPrimary300};
        background-color: transparent;
        color: ${props => props.theme.colorPrimary300};
        &:hover {
            background-color: ${props => props.theme.colorPrimary300};
            color: white;
        }
    }
`;

export const Content = styled.section<FaqTypo>`
    position: relative;
    z-index: 2;

    &:last-of-type {
        margin-bottom: -88px;
        padding-bottom: 0;
        @media screen and (min-width: ${props => props.theme.screenLgMin}) {
            margin-bottom: -179px;
        } 
    }
    
    &[data-layout="default"],

    &[data-layout="home"] {
        > [class*="Container"] {
            padding-bottom: 100px;
            @media screen and (min-width: ${props => props.theme.screenLgMin}) {
                padding-bottom: 300px;
            }
        }
    }
        
    &[nobackground="true"] {
        &:last-of-type {
            padding-bottom: 88px;
            @media screen and (min-width: ${props => props.theme.screenLgMin}) {
                padding-bottom: 179px;
            }
        }
    }      
`;

export const Inner = styled.div`
    gap: 32px 0;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        gap: 156px 0
    }
`;

export const Mask = styled.svg`
    position: absolute;
    &:not(.compact) {
        left: calc(50% - 1400px);
        top: -80px;
        @media screen and (min-width: ${props => props.theme.screenLgMin}) {
            bottom: -160px;
            top: initial;
            left: calc(50% - 960px);
        }
    }
    &.compact {
        left: calc(50% - 1400px);
        top: -80px;
        @media screen and (min-width: ${props => props.theme.screenLgMin}) {
            top: 0;
            left: calc(50% - 960px);
        }        
    }
    z-index: 1;
    path {
        fill: ${props => props.theme.colorPrimary100};
    }
`;

export const Img = styled.img`   
    position: absolute;
    bottom: 0;
    z-index: 3;
    right: 0;
    height: 123px;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        height: auto;
        left: 0;
        right: initial;
    }
`;

