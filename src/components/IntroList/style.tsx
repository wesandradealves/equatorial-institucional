import styled, {css, createGlobalStyle} from "styled-components";

export const Content = styled.section`  
    z-index: 3;
    position: relative;
    color: white;
    margin-top: -210px;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        margin-top: -540px;  
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
        padding-top: 66px;
        padding-bottom: 66px;        
        @media screen and (min-width: ${props => props.theme.screenLgMin}) {
            margin-top: -190px;
            margin-bottom: -190px;
        }
    }
`;

export const Column = styled.div`   

`;

export const ListGroup = styled.ul`   
    gap: 24px 0;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        margin: 0 -40px;
        gap: 58px 0;
    }
`;

export const ListItem = styled.li`  
    cursor: pointer;
    &:hover {
        [class*="fa"] {
            color: ${props => props.theme.colorHighlight300};
        }
    }
    border-bottom: 1px ${props => props.theme.colorNeutral100} solid;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        padding: 0 40px;
        border-bottom: 0;
    }
`;

export const Mask = styled.svg`  
    position: relative;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        width: 3000px;
        left: calc(50% - 1500px);  
    }
    path {
        fill: ${props => props.theme.colorPrimary400};
    }    
    &.--top {
        margin-bottom: -2px;
        z-index: 2;
    }
    &.--bottom {
        z-index: 2;
        -moz-transform: scale(-1, -1);
        -o-transform: scale(-1, -1);
        -webkit-transform: scale(-1, -1);
        transform: scale(-1, -1);     
        margin-top: -2px; 
        @media screen and (min-width: ${props => props.theme.screenLgMin}) {
            margin-bottom: -295px;
        }
        &.--backdrop {
            z-index: 1;
            left: 0;
            @media screen and (min-width: ${props => props.theme.screenLgMin}) {
                left: calc(50% - 1500px);  
            }
            bottom: -20px;
            position: absolute;
            path {
                fill: ${props => props.theme.colorHighlight300};
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