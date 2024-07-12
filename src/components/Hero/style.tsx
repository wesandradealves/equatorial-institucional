import styled, {css, createGlobalStyle} from "styled-components";

interface HeroTypo {
    background_image?: string;
    href?: any;
    className?: any;
}

export const Container = styled.section<HeroTypo>`
    ${({ background_image }) => background_image && css`
        background: url(${background_image}) center center / cover no-repeat;
    `}    
    .container {
        padding-top: 134px;
        padding-bottom: calc(4vw + 42px);
        margin-bottom: 265px;
        @media screen and (min-width: ${props => props.theme.screenMdMin}) {
            padding-top: 234px;
            @media screen and (min-width: ${props => props.theme.screenLgMin}) {
                padding-top: calc(234px + 279px);
                padding-bottom: calc(4vw + 176px);
                margin-bottom: 0;
            }       
        }
        position: relative;
        .inner {
            z-index: 10;
            position: relative;                
            margin-bottom: -320px;
            @media screen and (min-width: ${props => props.theme.screenLgMin}) {
                gap: 0 32px;
                margin-bottom: -220px;
                @media screen and (min-width: ${props => props.theme.screenXxlMin}) {
                    gap: 0 192px;
                }                
            }
        }
    }
`;

export const Mask = styled.svg`
    position: absolute;
    bottom: -4vw;
    z-index: 1;
    width: 100vw;
    left: calc(50% - 50vw);
`;

export const Information = styled.div`

`;

export const Services = styled.nav`
    margin: 108px -16px 0;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        margin: 0 -16px -42px;
    }
`;

export const ServiceCard = styled.a<HeroTypo>`
    padding: 0 8px 16px;

    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        padding: 0 16px 32px;
    }

    .card-inner {
        height: 100%;
        padding: 16px;
        gap: 8px 0;
        @media screen and (min-width: ${props => props.theme.screenLgMin}) {
            padding: 31px;
            gap: 31px 0;
        }
        border-radius: 16px;
        background: ${props => props.theme.colorPrimary100};
        color: ${props => props.theme.colorPrimary300};
        transition: 600ms ease-in-out all;
        &:hover {
            transform: scale(1.05);
            box-shadow: 0px 10px 20px -25px black;
        }
    }
`;

export const ClaraShortcut = styled.a<HeroTypo>`
    img {
        max-width: 100%
    }
`;

export const CardIcon = styled.img`
`;

export const CardTitle = styled.h3`
    font-size: ${props => props.theme.fontDesktop.bodyMedium1.fontSize};
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        font-size: ${props => props.theme.fontDesktop.bodyLarge1.fontSize};
    }
    color: inherit;
    max-width: 150px;
`;

export const Title = styled.h2`
    font-size: ${props => props.theme.fontDesktop.header5.fontSize};
    color: white;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        margin-bottom: 90px;
        font-size: ${props => props.theme.fontDesktop.header2.fontSize};
        @media screen and (min-width: ${props => props.theme.screenXxlMin}) {
            font-size: ${props => props.theme.fontDesktop.display1.fontSize};
        }
    }
`;