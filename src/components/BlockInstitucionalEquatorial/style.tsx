import styled, {css, createGlobalStyle} from "styled-components";

import { HeroTypo } from "../Hero/style";

export const Content = styled.section`
`;

export const Container = styled.div`
    position: relative;
    z-index: 1;
    &::after {
        content: "";
        position: absolute;
        z-index: -1;
        width: 880px;
        height: 880px;
        top: calc(50% - 440px);
        left: calc(50% - 440px);
        background: -moz-radial-gradient(circle, ${props => props.theme.colorPrimary125} -60%, rgba(0,212,255,0) 60%);
        background: -webkit-radial-gradient(circle, ${props => props.theme.colorPrimary125} -60%, rgba(0,212,255,0) 60%);
        background: radial-gradient(circle, ${props => props.theme.colorPrimary125} -60%, rgba(0,212,255,0) 60%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#74deff",endColorstr="#00d4ff",GradientType=1);        
    }
    .slick-slider {
        .slick-list {
            .slick-track {
                display: flex;
                align-items: stretch;
                @media screen and (min-width: ${props => props.theme.screenMdMin}) {
                    padding: 30px 0;
                }
                .slick-slide {
                    padding: 0 8px;
                    @media screen and (min-width: ${props => props.theme.screenMdMin}) {
                        padding: 0 16px;
                    }
                    height: auto;
                    > div {
                        height: 100%;
                    }
                }
            }
        }
    }
`;

export const Columns = styled.div`
    gap: 24px 0;
    @media screen and (max-width: ${props => props.theme.screenMdMin}) {
        [class*="BlockHeading"] {
            gap: 24px 0;
        }
    }
    @media screen and (min-width: ${props => props.theme.screenMdMin}) {
        gap: 53px 0;
    }
    position: relative;
    z-index: 2;        
`;

export const Filter = styled.nav`
    gap: 0 16px;
    padding: 0 ${props => props.theme.spacingSm};
    position: relative;
    z-index: 5;
`;

export const FilterLink = styled.a`
    font-size: ${props => props.theme.fontDesktop.bodyMedium1.fontSize};
    color: black;
    cursor: pointer;
    font-weight: 600;
    text-align: center;
    padding: 8px 16px;
    border-radius: 999px;
    flex: 0 0 auto;
    min-width: 300px;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        min-width: initial
    }
    &.current,
    &:hover {
        background: rgba(255,255,255,.4);
    }
`;

export const Item = styled.div`
    height: inherit;
`;

export const Inner = styled.div`
    box-shadow: 0px 4px 16px 0px #0000001A;
    border-radius: 24px;
    background: white;
    height: inherit;
    gap: 0 32px;
`;

export const Info = styled.div`
    padding: 32px;
    gap: 16px 0;
    @media screen and (min-width: ${props => props.theme.screenMdMin}) {
        padding: 48px 32px 32px 0;
    }
`;

export const Text = styled.div`
    font-size: ${props => props.theme.fontDesktop.bodySmall1.fontSize};
    @media screen and (min-width: ${props => props.theme.screenMdMin}) {
        font-size: ${props => props.theme.fontDesktop.bodyLarge1.fontSize};
    }    
    p {
        font-size: inherit;
    }
`;

export const Top = styled.div`
    @media screen and (max-width: ${props => props.theme.screenMdMin}) {
        border-bottom: 2px ${props => props.theme.colorPrimary150} solid;
        padding: 0 0 8px;
        margin: 0 0 8px;
    }   
`;

export const Bottom = styled.div`
    gap: 16px 0;

    flex: 1;
    @media screen and (min-width: ${props => props.theme.screenMdMin}) {
        flex: 0 0 auto;
        gap: 32px 0;
    }
    @media screen and (max-width: ${props => props.theme.screenMdMin}) {
        [class*="Button"] {
            padding-left: 20px;
            padding-right: 20px;
        }
    }
`;

export const Category = styled.p`
    letter-spacing: .2rem;
    font-size: ${props => props.theme.fontDesktop.smallText1.fontSize}; 
    text-transform: uppercase;
`;

export const Title = styled.h2 `
    max-width: 564px;
    font-weight: 600;   
    @media screen and (min-width: ${props => props.theme.screenMdMin}) {
        font-size: ${props => props.theme.fontDesktop.header3.fontSize};
    }
    font-size: ${props => props.theme.fontDesktop.bodyMedium1.fontSize};
`;

export const Logo = styled.img `
`;

export const Thumbnail = styled.div<HeroTypo>`
    ${({ background_image }) => background_image && css`
        background: url(${background_image}) center center / cover no-repeat whitesmoke;
    `}  
    min-height: 188px;
    width: 100%;
    @media screen and (min-width: ${props => props.theme.screenMdMin}) {
        min-height: 618px;
        width: 372px;
        height: 100%;
    }
`;