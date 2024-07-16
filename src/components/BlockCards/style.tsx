import styled, {css, createGlobalStyle} from "styled-components";
import { HeroTypo } from "../Hero/style";

export const Content = styled.section<HeroTypo>`   
    ${({ background_image }) => background_image && css`
        background: url(${background_image}) center center / cover no-repeat;
    `}  
`;

export const Title = styled.span`   
    gap: 0 12px;
    padding: 32px 32px 0;
    font-weight: 600;
    font-size: ${props => props.theme.fontDesktop.subtitle1.fontSize};
`;

export const Img = styled.img`
    height: 200px;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        height: 300px;
    }
    object-fit: cover;
`;

export const Icon = styled.img`   
`;

export const Text = styled.span`   
    padding: 0 32px;
    font-size: ${props => props.theme.fontDesktop.bodyMedium1.fontSize};
`;

export const Container = styled.div`   
    gap: 72px 0;
    position: relative;
    &::after {
        @media screen and (min-width: ${props => props.theme.screenLgMin}) {
            content: "";
        }
        position: absolute;
        z-index: -1;
        width: 880px;
        height: 880px;
        top: calc(50% - 440px);
        left: calc(50% - 440px);
        background: -moz-radial-gradient(circle, ${props => props.theme.colorPrimary125} 10%, rgba(0,212,255,0) 60%);
        background: -webkit-radial-gradient(circle, ${props => props.theme.colorPrimary125} 10%, rgba(0,212,255,0) 60%);
        background: radial-gradient(circle, ${props => props.theme.colorPrimary125} 10%, rgba(0,212,255,0) 60%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#74deff",endColorstr="#00d4ff",GradientType=1);        
    }
    * {
        position: relative;
        z-index: 2;
    }
`;

export const Cards = styled.div` 
    gap: 32px;
`;

export const Card = styled.article`   
`;

export const Inner = styled.div`  
    border-radius: 16px;
    gap: 12px 0;
    background: ${props => props.theme.colorPrimary400};
    color: white;
    padding: 0 0 80px;
    height: 100%;
`;

