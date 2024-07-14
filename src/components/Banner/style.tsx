import styled, {css, createGlobalStyle} from "styled-components";
import { HeroTypo } from "../Hero/style";

export const Content = styled.section<HeroTypo>`   
    ${({ background_image }) => background_image && css`
        background: url(${background_image}) center center / cover no-repeat;
    `}  
`;

export const Mask = styled.svg`   
`;

export const Container = styled.div`   
    padding-top: calc(100px + 40px);
    gap: 24px 0;
    @media screen and (min-width: ${props => props.theme.screenMdMin}) {
        padding-top: calc(210px + 40px);
        @media screen and (min-width: ${props => props.theme.screenLgMin}) {
            padding-top: calc(220px + 40px);
        }        
    }
    color: white;
`;

export const Title = styled.span`  
    color: inherit;
    font-size: ${props => props.theme.fontDesktop.header3.fontSize};
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        font-size: ${props => props.theme.fontDesktop.display1.fontSize};
    }    
    * {
        font-size: inherit;
    }
`;

