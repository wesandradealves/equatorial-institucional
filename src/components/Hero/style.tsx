import styled, {css, createGlobalStyle} from "styled-components";

export interface HeroTypo {
    background_image?: string;
    href?: any;
    className?: any;
}

export const Container = styled.section<HeroTypo>`
    ${({ background_image }) => background_image && css`
        background: url(${background_image}) center center / cover no-repeat;
    `}    
    margin-bottom: 200px;
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        margin-bottom: -242px;
        overflow: hidden;
    }
    .container {
        padding-top: 134px;
        @media screen and (min-width: ${props => props.theme._breakpoints.mobile.md}) {
            padding-top: 234px;
            @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
                padding-top: calc(234px + 279px);
                padding-bottom: 230px;
            }       
        }
        position: relative;
        .inner {
            z-index: 10;
            position: relative;  
            margin-bottom: -430px;     
            @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
                gap: 0 32px;
                margin-bottom: 0;
                @media screen and (min-width: ${props => props.theme._breakpoints.desktop.xxl}) {
                    gap: 0 192px;
                }                
            }
        }
    }
    position: relative;
    z-index: 1;
    & + * {
        z-index: 2;
    }
`;

export const Mask = styled.svg`
    bottom: 0;
    width: 1024px;
    left: 0;    
    position: relative;
    margin: 0 -24px;
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        width: 3000px;
        position: absolute;
        left: calc(50% - 1500px);
    }
    z-index: 1;
`;

export const Information = styled.div`
    position: relative;
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        animation: moveLeft 600ms forwards;
    }
`;

export const Services = styled.nav`
    margin: 108px -16px 0;
    position: relative;
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        margin: 0 -16px -42px;
        animation: moveRight 600ms forwards;
    }
`;

export const ServiceCard = styled.a<HeroTypo>`
    padding: 0 8px 16px;

    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        padding: 0 16px 32px;
    }

    .card-inner {
        height: 100%;
        padding: 16px;
        gap: 8px 0;
        @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
            padding: 31px;
            gap: 31px 0;
        }
        border-radius: 16px;
        background: ${props => props.theme._colors.primary.primary100};
        color: ${props => props.theme._colors.primary.primary300};
        @media screen and (min-width: ${props => props.theme._breakpoints.desktop.xl}) {
            transition: 600ms ease-in-out all;
            &:hover {
                transform: scale(1.05);
                box-shadow: 0px 10px 20px -25px black;
            }
        }
    }
`;

export const ClaraShortcut = styled.a<HeroTypo>`
    img {
        max-width: 100%;
        width: 100%;
        @media screen and (min-width: ${props => props.theme._breakpoints.mobile.sm}) {
            width: auto
        }
    }
`;

export const CardIcon = styled.img`
`;

export const CardTitle = styled.h3`
    font-size: ${props => props.theme._fonts.desktop.bodyMedium1.fontSize};
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        font-size: ${props => props.theme._fonts.desktop.bodyLarge1.fontSize};
    }
    color: inherit;
    max-width: 150px;
`;

export const Title = styled.h2`
    font-size: ${props => props.theme._fonts.desktop.header5.fontSize};
    color: white;
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        margin-bottom: 90px;
        font-size: ${props => props.theme._fonts.desktop.header2.fontSize};
        @media screen and (min-width: ${props => props.theme._breakpoints.desktop.xxl}) {
            font-size: ${props => props.theme._fonts.desktop.display1.fontSize};
        }
    }
`;
