import styled from "styled-components";

interface TextoNumeroContent {
    layout:any
}
export const Content = styled.section<TextoNumeroContent> `
    padding: 120px 0px;
    background-color: ${props => props.layout == "alternative" ? props.theme._colors.primary.primary100 : props.theme._colors.primary.primary400};
`
export const Container = styled.div`
    
`
export const Cards = styled.div `
    margin: 0 -16px -32px;
`
export const Card = styled.div `
    padding: 0 16px 32px;
`
export const Column = styled.div `
    z-index: 2;
`
export const Circle = styled.div `
    width: 48px;
    height: 48px;
    z-index: 2;
    background: ${props => props.theme._colors.primary.primary300}; 
    color: white;
    border-radius: 999px;
    font-size: ${props => props.theme._fonts.desktop.subtitle1.fontSize};
    font-weight: 600;
`

export const Text = styled.div `
    font-weight: 400;
    width: 100%;
    z-index: 2;

    p {
        font-size: ${props => props.theme._fonts.mobile.bodyLarge1.fontSize};
    }

    h1, h2, h3, h4, h5, h6 {
        font-size: ${props => props.theme._fonts.desktop.subtitle1.fontSize};
    }
`

export const Mask = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    path {
        fill: ${props => props.theme._colors.primary.primary100};
    }
`;

export const Inner = styled.div`
    height: 100%;
    position: relative;
    border-radius: 16px;
    background-color: white;
    padding: 32px;    
`;

