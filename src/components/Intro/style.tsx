import styled, {css, createGlobalStyle} from "styled-components";

export interface IntroTypo {
    layout?: any;
    field_detail_position?:any;
    field_detail_color?:any;
}

const handleDetailPosition = (position: any) => {
    switch (position) {
        case "bottom":
            return `
                transform: rotate(0deg) !important; 
                transform-origin: right 0 !important; 
                top: 100% !important;
                bottom: initial !important; 
                right: initial !important;  
                left: 0 !important;
                width: auto;

                -moz-transform: scaleY(-1) !important;
                -o-transform: scaleY(-1) !important;
                -webkit-transform: scaleY(-1) !important;
                transform: scaleY(-1) !important;                
            `;
        case "left":
            return `
                transform: rotate(-90deg) !important; 
                transform-origin: ${position} 0 !important; 
                top: 100% !important; 
                left: -25px !important; 
                right: initial !important;  
                width: auto;
            `;
        case "right":
            return `
                transform: rotate(90deg) !important;
                transform-origin: ${position} 0 !important;
                top: 100% !important;
                left: initial !important;
                right: -25px !important;   
                width: auto;           
            `;
        default:
            return `width: 100%;`;
    }
};

export const Content = styled.section<IntroTypo>`   
    position: relative;
    ${({ layout }) => (layout == 'alternative') && css`
        color: white;
        z-index: 2;
        margin-top: -240px;
        @media screen and (min-width: ${props => props.theme._breakpoints.mobile.md}) {
            margin-top: -270px;
            @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
                margin-top: -240px;
            }            
        }
        [class*="Thumbnail"] {
            svg {
                transform: rotate(90deg);
                transform-origin: right 0;
                top: 100%;
                left: initial;
                right: -35px;                
                path {
                    fill: ${props => props.theme._colors.highlight.highlight300}
                }
            }
        }        
    `}     
`;

export const Container = styled.div<IntroTypo>`   
    gap: 40px 67px;
    position: relative;
    z-index: 2;
    ${({ layout }) => (layout == 'alternative') && css`
        &.container-fluid {
            padding-top: 88px;
            padding-bottom: 88px;
            background-color: ${props => props.theme._colors.primary.primary400};
        }
    `}      
`;

export const Text = styled.div`   
    gap: 32px 0;
    p {
        font-size: ${props => props.theme._fonts.desktop.linkText.fontSize};
    }
    h1, h2, h3, h4, h5, h6 {
        font-size: ${props => props.theme._fonts.mobile.header3.fontSize};
    }             
`;

export const Thumbnail = styled.div`   
    border-radius: 20px;
    position: relative;
    width: 100%;
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
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
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        height: auto;
    }
`;

export const Mask = styled.svg<IntroTypo>`   
    position: absolute;
    z-index: 2;
    top: -20px;
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        top: 0; 
    }
    left: 0;
    width: 100%;
    height: auto;
    ${({ field_detail_color }) => field_detail_color && css`
        path {
            fill: ${field_detail_color} !important;
        }        
    `}      
    ${({ field_detail_position }) => handleDetailPosition(field_detail_position)};
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
    font-size: ${props => props.theme._fonts.desktop.bodyLarge1.fontSize};
`;

export const Views = styled.p`   
    font-size: ${props => props.theme._fonts.desktop.bodySmall1.fontSize};
`;

export const WrapperMask = styled.svg`   
    path {
        fill: ${props => props.theme._colors.primary.primary400};
    }    
    &.--top {
        position: relative;
        margin-bottom: -2px;
        @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
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