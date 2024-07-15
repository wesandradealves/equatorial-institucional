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
    flex: 0 0 100%;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        flex: 0 0 auto;
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