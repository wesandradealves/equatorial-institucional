import styled, {css, createGlobalStyle} from "styled-components";
import { HeroTypo } from "../Hero/style";

export const Content = styled.section<HeroTypo>`   
    ${({ background_image }) => background_image && css`
        background: url(${background_image}) center center / cover no-repeat;
    `}  
    &:not(:only-child) {
        @media screen and (min-width: ${props => props.theme.screenLgMin}) {
            margin-bottom: -320px;
        }
    }
    z-index: 1;    
    & + * {
        z-index: 2;
        position: relative;
    }
    &:not(:first-of-type) {
        margin: 0 0 -44px;
        @media screen and (min-width: ${props => props.theme.screenMdMin}) {
            margin: 0 0 -88px;
        }
    }
    position: relative;
    &::after {
        z-index: 1;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(0,0,0);
        background: linear-gradient(90deg, rgba(0,0,0,0.17970938375350143) 18%, rgba(0,0,0,0.4066001400560224) 60%);
    }
`;

export const Mask = styled.svg`   
    position: absolute;
    z-index: 2;
    bottom: 0;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        width: 3000px;
        left: calc(50% - 1500px);    
    }
`;

export const Container = styled.div`   
    padding-top: calc(100px + 44px);
    padding-bottom: 240px;
    gap: 24px 0;
    @media screen and (min-width: ${props => props.theme.screenMdMin}) {
        padding-top: calc(210px + 78px);
        padding-bottom: 240px;
        @media screen and (min-width: ${props => props.theme.screenLgMin}) {
            padding-top: calc(220px + 78px);
            padding-bottom: 500px;
        }        
    }
    color: white;
    z-index: 3;
    position: relative;
`;

export const Title = styled.span`  
    color: inherit;
    position: relative;
    font-weight: 600;
    font-size: ${props => props.theme.fontDesktop.header3.fontSize};
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        font-size: ${props => props.theme.fontDesktop.display1.fontSize};
        animation: moveLeft 600ms forwards;
    }    
    * {
        font-size: inherit;
    }
`;

