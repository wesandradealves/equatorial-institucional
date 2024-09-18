import styled, {css, createGlobalStyle} from "styled-components";

export interface FaqTypo {
    nobackground?: any;
}

export const Container = styled.div`
    position: relative;
    padding-bottom: 25px;
    padding-top: 48px;
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        padding-top: 90px;
    }
    * {
        position: relative;
        z-index: 3;
    }
    [class*="Button"] {
        border-color: ${props => props.theme._colors.primary.primary300};
        background-color: transparent;
        color: ${props => props.theme._colors.primary.primary300};
        &:hover {
            background-color: ${props => props.theme._colors.primary.primary300};
            color: white;
        }
    }
    [class*="BlockHeading"] {
        [class*="text-center"] {
            margin: 0 auto;
            & + * {
                margin: -30px auto 0;
                font-size: ${props => props.theme._fonts.desktop.subtitle1.fontSize};
            }
        }
    }
    [class*="AccordionWrapper"] {
        height: 270px;
        overflow: auto;
    }
 
    [class*="Filter"] ~ [class*="AccordionWrapper"] {
        height: auto;
    }
`;

export const Content = styled.section<FaqTypo>`
    position: relative;
    z-index: 2;

    &:last-of-type {
        margin-bottom: -88px;
        padding-bottom: 0;
        @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
            margin-bottom: -179px;
        } 
    }
    
    &[data-layout="default"],

    &[data-layout="home"] {
        > [class*="Container"] {
            // padding-bottom: 100px;
            // @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
            //     padding-bottom: 300px;
            // }
        }
    }
        
    &[nobackground="true"] {
        &:last-of-type {
            padding-bottom: 88px;
            @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
                padding-bottom: 179px;
            }
        }
    }      
`;

export const Inner = styled.div`
    gap: 32px 0;
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        gap: 156px 0
    }
`;

export const Mask = styled.svg`
    position: absolute;
    &:not(.compact) {
        left: calc(50% - 1400px);
        top: -80px;
        @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
            bottom: -160px;
            top: initial;
            left: calc(50% - 960px);
        }
    }
    &.compact {
        left: calc(50% - 1400px);
        top: -80px;
        @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
            top: 0;
            left: calc(50% - 960px);
        }        
    }
    z-index: 1;
    path {
        fill: ${props => props.theme._colors.primary.primary100};
    }
`;

export const Img = styled.img`   
    position: absolute;
    bottom: 0;
    z-index: 3;
    right: 0;
    height: 123px;
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        height: auto;
        left: 0;
        right: initial;
    }
`;

export const SearchBar = styled.form`   
    padding: 20px 16px;
    border-radius: 16px;
    border: 1px ${props => props.theme._colors.neutral.neutral400} solid;
`;

export const SearchField = styled.input`   
    color: ${props => props.theme._colors.neutral.neutral600};
    font-size: ${props => props.theme._fonts.desktop.bodyMedium1.fontSize};
    font-weight: 400;
    line-height: 24px;
    border: 0;
`;

export const Submit = styled.button`   
    border: 0;
    background: none;
`;

export const Icon = styled.i`   
    font-size: 24px;
    color: ${props => props.theme._colors.primary.primary300};
`;

export const Filter = styled.div`   
`;