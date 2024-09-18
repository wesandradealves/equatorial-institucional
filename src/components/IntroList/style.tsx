import styled, {css, createGlobalStyle} from "styled-components";

export const Content = styled.section`  
    z-index: 3;
    position: relative;
    color: white;
    margin-top: -225px;
    @media screen and (min-width: ${props => props.theme._breakpoints.mobile.md}) {
        margin-top: -290px;  
        @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
            margin-top: -520px;  
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
        background: ${props => props.theme._colors.primary.primary400};
        padding-top: 66px;
        padding-bottom: 66px;        
        @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
            margin-top: -190px;
            margin-bottom: -190px;
        }
    }
`;

export const Column = styled.div`   

`;

export const ListGroup = styled.ul`   
    gap: 24px 0;
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        margin: 0 -40px;
        gap: 58px 0;
    }
`;

export const ListItem = styled.li`  
    cursor: pointer;
    &:hover {
        [class*="fa"] {
            color: ${props => props.theme._colors.highlight.highlight300};
        }
    }
    border-bottom: 1px ${props => props.theme._colors.neutral.neutral100} solid;
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        padding: 0 40px;
        border-bottom: 0;
    }
`;

export const Mask = styled.svg`  
    position: relative;
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        width: 3000px;
        left: calc(50% - 1500px);  
    }
    path {
        fill: ${props => props.theme._colors.primary.primary400};
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
        @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
            margin-bottom: -295px;
        }
        &.--backdrop {
            z-index: 1;
            left: 0;
            @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
                left: calc(50% - 1500px);  
            }
            bottom: -20px;
            position: absolute;
            path {
                fill: ${props => props.theme._colors.highlight.highlight300};
            }
        }        
    }    
`;

export const Text = styled.div`   
    font-size: ${props => props.theme._fonts.mobile.bodySmall1.fontSize};
`;

export const Title = styled.h3`   
    font-size: ${props => props.theme._fonts.mobile.subtitle1.fontSize};
`;

export const Arrow = styled.i`   
    flex: 0 0 auto;
    width: auto;
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        width: 93px;
    }
`;

export const Inner = styled.div`   
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        border-bottom: 1px ${props => props.theme._colors.neutral.neutral100} solid;
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
        background: ${props => props.theme._colors.highlight.highlight300};
        width: 0;
        height: 1px;
        bottom: -1px;
        position: absolute;
        content: "";
    }
`;
