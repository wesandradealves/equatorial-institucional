import styled, {css, createGlobalStyle} from "styled-components";

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

export const Content = styled.section`
    position: relative;
    z-index: 2;
    .accordion {
        max-height: 330px;
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
    bottom: -100px;
    left: calc(50% - 960px);
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

