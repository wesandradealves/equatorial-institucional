import styled, {css, createGlobalStyle} from "styled-components";

interface VideoPillTypo {
    background_image: string;
}

export const Content = styled.section`
    z-index: 2;
`;

export const Container = styled.div`
    padding-left: 0;
    padding-right: 0;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        padding-left: ${props => props.theme.spacingSm};
    }
    [class*="BlockHeading"] {
        @media screen and (max-width: ${props => props.theme.screenMdMin}) {
            padding-left: ${props => props.theme.spacingSm};
            padding-right: ${props => props.theme.spacingSm};
        }
    }
`;

export const Columns = styled.div`
    gap: 48px 0;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
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
    @media screen and (min-width: ${props => props.theme.screenMdMin}) {
        // height: 610px;
        @media screen and (min-width: ${props => props.theme.screenXlMin}) {
            height: 440px;
        }
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
    font-size: 1.3rem;
    z-index: 3;
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

