import styled, {css, createGlobalStyle} from "styled-components";
import { HeroTypo } from "../Hero/style";

export const Content = styled.section`   

`;

export const Gallery = styled.div`   
    .slick-slider {
        .slick-list {
            .slick-track {
                display: flex;
                align-items: center;
                .slick-slide {
                    padding: 0 8px;
                    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
                        padding: 32px 16px;
                    }
                }
            }
        }
    }
`;

export const GalleryItem = styled.article`   
    border-radius: 24px;
`;

export const Info = styled.div`   
    color: inherit;
    z-index: 2;
    padding: 48px;
    position: absolute;
    left: 0;
    bottom: 0;
    gap: 16px 0;
`;

export const Title = styled.div`   
    color: inherit;
    font-weight: 600;
    font-size: ${props => props.theme.fontMobile.header2.fontSize}; 
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        font-size: ${props => props.theme.fontDesktop.header2.fontSize}; 
    }
    * {
        font-size: inherit;
    }
`;

export const Subtitle = styled.p`   
    color: inherit;
    z-index: 2;
    position: relative;   
    padding: 48px;
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

export const Text = styled.div`   
    color: inherit;
    z-index: 2;
    position: relative;   
    font-weight: 500;
    max-width: 535px;
    font-size: ${props => props.theme.fontDesktop.subtitle1.fontSize}; 
    * {
        font-size: inherit;
        color: inherit;
    }
`;

export const Anchor = styled.a`   
    color: inherit;
    height: 64px;
    width: 64px;
    border-radius: 999px;
    position: absolute;
    right: 0;
    bottom: 0;
    border: 1px white solid;
    margin: 48px;
    z-index: 2;
    transition: 250ms ease-in-out all;
    &:hover {
        background-color: white;
        color: black;
        box-shadow: 0px 0px 0px 10px rgba(255,255,255,.3);
        transform: scale(1.1);
    }
`;

export const Inner = styled.div<HeroTypo>`   
    ${({ background_image }) => background_image && css`
        background: url(${background_image}) center center / cover no-repeat;
    `}  
    height: 0;
    position: relative;
    padding: 0 0 380px;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        padding: 0 0 52%;
    }
    color: white;
    &::after {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.3);
        content: "";
        top: 0;
        left: 0;
    }
`;