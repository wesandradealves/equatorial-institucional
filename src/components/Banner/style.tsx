import styled, {css, createGlobalStyle} from "styled-components";
import { HeroTypo } from "../Hero/style";

export const Content = styled.section<HeroTypo>`   
    ${({ background_image }) => background_image && css`
        background: url(${background_image}) center center / cover no-repeat;
    `}  
    margin: 0 0 -44px;
    max-height: 776px;
    @media screen and (min-width: ${props => props.theme.screenMdMin}) {
        margin: 0 0 -88px;
    }
`;

export const Mask = styled.svg`   
    position: relative;
    bottom: -1px;
`;

export const Container = styled.div`   
    padding-top: calc(100px + 44px);
    gap: 24px 0;
    @media screen and (min-width: ${props => props.theme.screenMdMin}) {
        padding-top: calc(210px + 78px);
        @media screen and (min-width: ${props => props.theme.screenLgMin}) {
            padding-top: calc(220px + 78px);
        }        
    }
    color: white;
`;

export const Title = styled.span`  
    color: inherit;
    position: relative;
    font-size: ${props => props.theme.fontDesktop.header3.fontSize};
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        font-size: ${props => props.theme.fontDesktop.display1.fontSize};
        animation: moveLeft 600ms forwards;
    }    
    * {
        font-size: inherit;
    }
`;

