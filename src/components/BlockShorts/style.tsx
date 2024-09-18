import styled, {css, createGlobalStyle} from "styled-components";

interface VideoPillTypo {
    background_image: string;
}

export const Content = styled.section`
    z-index: 1;
`;

export const Container = styled.div`
    padding-left: 0;
    padding-right: 0;
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        padding-left: ${props => props.theme._spacing.mobile.sm};
    }
    [class*="BlockHeading"] {
        @media screen and (max-width: ${props => props.theme._breakpoints.mobile.md}) {
            padding-left: ${props => props.theme._spacing.mobile.sm};
            padding-right: ${props => props.theme._spacing.mobile.sm};
        }
    }     
`;

export const Columns = styled.div`
    gap: 48px 0;
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        gap: 0
    }
`;

export const Column = styled.div`
   
`;

export const VideoPill = styled.div<VideoPillTypo>`
    ${({ background_image }) => background_image && css`
        background: url(${background_image}) center 0 / cover no-repeat;
    `}   
    border-radius: 19px;
    overflow: hidden;
    position: relative;
    height: 480px;
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.xl}) {
        height: 440px;
    }   
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        z-index: 1;
        transition: 600ms ease-in-out all;
        background: linear-gradient(to bottom,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.75) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    }
    &:hover::after {
        opacity: 0
    }
    > * {
        z-index: 2;
    }    
`;


export const VideoPillInner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 10;
    padding: 25px;
`;

export const VideoPillTitle = styled.h3`
    color: white;
    font-weight: 600;
    font-size: ${props => props.theme._fonts.mobile.subtitle1.fontSize};
    z-index: 3;
    gap: 24px 0;
`;

export const PlayVideo = styled.a`
    position: absolute;
    padding: 25px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    transition: 500ms ease all;
    &:hover {
        transform: scale(1.1)
    }
`;

