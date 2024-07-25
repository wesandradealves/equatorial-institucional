import styled from "styled-components";

interface TextoNumeroContent {
    layout:string
}
export const Content = styled.section<TextoNumeroContent> `
    padding: 120px 0px;
    background-color: ${props => props.layout == "alternative" ? props.theme.colorPrimary100 : props.theme.colorPrimary400};
`
export const Container = styled.section `
    
`
export const Cards = styled.div `
    gap: 32px;
`
export const Card = styled.div `
    position: relative;
    height: 172px;
    //max-width: 501px;
    border-radius: 16px;
    background-color: #ffff;
    padding: 32px;
`
export const Column = styled.div `
    z-index: 2;
`
export const Circle = styled.div `
    width: 48px;
    height: 48px;
    background-color: #0414A1;
    color: white;
    border-radius: 30px;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px; /* 133.333% */
`

export const Text = styled.div `
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color:#0a0a0a;
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    
    @media screen and (max-width: ${props => props.theme.screenMdMin}) {
        font-size: ${props => props.theme.fontDesktop.bodySmall1.fontSize};
    }
`

export const Mask = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    path {
        fill: ${props => props.theme.colorPrimary100};
    }
`;

export const Link = styled.a`
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; 
    color:${props => props.theme.colorPrimary300}
`




