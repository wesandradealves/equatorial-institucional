import styled, {css, createGlobalStyle} from "styled-components";

export const Content = styled.section`   

`;

export const Container = styled.div`   
    gap: 40px 32px;
    .block-head {
        @media screen and (max-width: ${props => props.theme.screenLgMin}) {
            gap: 18px 0
        }
        [class*="Button"] {
            @media screen and (max-width: ${props => props.theme.screenLgMin}) {
                display: flex !important;
                margin: 0 auto !important;
            }
        }
    }
`;

export const Text = styled.div`   

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