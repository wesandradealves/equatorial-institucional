import styled, {css, createGlobalStyle} from "styled-components";

import { HeroTypo } from "../Hero/style";

export const Content = styled.section`   
`;

export const Container = styled.div`   
`;

export const Inner = styled.div<HeroTypo>`   
    ${({ background_image }) => background_image && css`
        background: url(${background_image}) center center / cover no-repeat;
    `}  
    border-radius: 24px;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.5);
        z-index: 1;
    }
    height: 0;
    padding: 0 0 414px;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        padding: 0 0 52%;
    }    
    color: white;
`;

export const Title = styled.span`   
    font-size: ${props => props.theme.fontDesktop.bodyLarge1.fontSize};
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        font-size: ${props => props.theme.fontDesktop.header2.fontSize};
    }  
    max-width: 714px;
    font-weight: 600;
`;

export const Item = styled.article`   
`;

export const Text = styled.div`   
    color: inherit;
    z-index: 2;
    position: relative;   
    padding: 24px;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        padding: 48px;
    }
    gap: 16px 0;
    font-weight: 600;
    letter-spacing: .2rem;
    font-size: ${props => props.theme.fontDesktop.smallText1.fontSize}; 
    text-transform: uppercase;
    &::before {
        content: "";
        display: block;
        height: 3px;
        width: 25px;
        background: white;
    }
`;
export const Info = styled.div`   
    gap: 24px 0;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        gap: 40px 0;
    }
    z-index: 2;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 24px;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        padding: 48px;
    }
`;