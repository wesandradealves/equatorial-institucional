import styled, {css, createGlobalStyle} from "styled-components";

export interface IntroTypo {
    layout?: any;
}

export const Content = styled.section<IntroTypo>`   
    position: relative;
    ${({ layout }) => (layout == 'alternative') && css`
        color: white;
        z-index: 2;
        margin-top: -220px;
        @media screen and (min-width: ${props => props.theme.screenLgMin}) {
            margin-top: -350px;
        }
        [class*="Thumbnail"] {
            svg {
                transform: rotate(90deg);
                transform-origin: right 0;
                top: 100%;
                @media screen and (min-width: ${props => props.theme.screenLgMin}) {
                    top: calc(100% + 130px);
                }
                left: initial;
                right: -35px;                
                path {
                    fill: ${props => props.theme.colorHighlight300}
                }
            }
        }        
    `}     
`;

export const Container = styled.div<IntroTypo>`   
    gap: 40px 32px;
    position: relative;
    z-index: 2;
    ${({ layout }) => (layout == 'alternative') && css`
        &.container-fluid {
            padding-top: 88px;
            padding-bottom: 88px;
            background-color: ${props => props.theme.colorPrimary400};
        }
    `}      
`;

export const Text = styled.div`   
    gap: 32px 0;
    p {
        font-size: ${props => props.theme.fontDesktop.linkText.fontSize};
    }
    h1, h2, h3, h4, h5, h6 {
        font-size: ${props => props.theme.fontMobile.header3.fontSize};
    }             
`;

export const Thumbnail = styled.div`   
    border-radius: 20px;
    position: relative;
    width: 100%;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        width: 400px;
    }
    flex: 0 0 auto;
    &.is-video {
        height: 611px;
        img {
            height: 100%;
            object-fit: cover;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
        }
    }
`;

export const Img = styled.img`   
    width: 100%;
    object-fit: cover;
    height: 300px;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        width: auto;
        height: auto;
    }
`;

export const Mask = styled.svg`   
    position: absolute;
    z-index: 2;
    top: -20px;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        top: 0; 
    }
    left: 0;
    width: 100%;
    height: auto;
`;

export const VideoInfo = styled.div`   
    position: absolute;
    z-index: 3;
    bottom: 0;
    left: 0;
    color: white;
    padding: 25px;
    gap: 12px 0;
`;

export const Title = styled.h3`   
    font-size: ${props => props.theme.fontDesktop.bodyLarge1.fontSize};
`;

export const Views = styled.p`   
    font-size: ${props => props.theme.fontDesktop.bodySmall1.fontSize};
`;

export const WrapperMask = styled.svg`   
    path {
        fill: ${props => props.theme.colorPrimary400};
    }    
    &.--top {
        position: relative;
        margin-bottom: -2px;
        @media screen and (min-width: ${props => props.theme.screenLgMin}) {
            width: 3000px;
            margin-top: -290px;
            left: calc(50% - 1500px);  
            margin-bottom: -180px;  
        }
    }
    &.--bottom {
        -moz-transform: scale(-1, -1);
        -o-transform: scale(-1, -1);
        -webkit-transform: scale(-1, -1);
        transform: scale(-1, -1);     
        margin-top: -2px; 
    }    
`;