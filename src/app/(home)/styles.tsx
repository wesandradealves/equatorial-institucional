import styled, {css, createGlobalStyle} from "styled-components";

interface ContentTypo {
    background_image: string;
}

export const ListNav = styled.ul`
    flex: 0 0 auto;
    padding: 24px;
    min-width: 100%;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        padding: 40px 56px;
        min-width: 512px;
    }
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.20);
    backdrop-filter: blur(40px);      
`;

export const Navigation = styled.nav`
    display: flex;
    flex-flow: column;
    gap: 40px 0;
    width: 100%;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        gap: 0 82px;
        width: auto;
        flex-flow: row wrap;  
        align-items: stretch;
    }    
`;

export const NavItem = styled.li`
    padding: 24px 16px;
    color: white;
    position: relative;
    transition: 300ms ease-in-out all;
    &:not(:last-child) {
        border-bottom: 1px white solid;
        &::after {
            content: "";
            position: absolute;
            bottom: -1px;
            width: 0;
            background-color: #FCD403;
            left: 0;
            transition: 600ms ease-in-out all;
            height: 1px;
        }
    }
    svg {
        transition: 600ms ease-in-out all;
        position: relative;
        display: inline-block;
        right: 0;
    }
    &:hover {
        &::after {
            width: 100%;
        }
        color: #FCD403;
        border-color: #FCD403;
        svg {
            right: -15px;
            path {
                stroke: #FCD403;
            }
        }
    }
`;

export const NavLink = styled.a`
    color: inherit;
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavTitle = styled.h2`
    color: white;
    flex: 1;
    color: white;
    font-weight: normal;
    text-align: center;
    font-size: 2.5rem;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        text-align: initial;
        font-size: 5rem;
    }
`;

export const Spinner = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    background: rgba(255, 255, 255, 0.20);
    backdrop-filter: blur(40px);     
`;

export const Loader = styled.div`
    transform: rotateZ(45deg);
    perspective: 1000px;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    color: #fff;
    &:before,
    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
        border-radius: 50%;
        transform: rotateX(70deg);
        animation: 1s spin linear infinite;
    }
    &:after {
        color: #0414A1;
        transform: rotateY(70deg);
        animation-delay: .4s;
    }   
    @keyframes rotate {
        0% {
        transform: translate(-50%, -50%) rotateZ(0deg);
        }
        100% {
        transform: translate(-50%, -50%) rotateZ(360deg);
        }
    }
    @keyframes rotateccw {
        0% {
        transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
        transform: translate(-50%, -50%) rotate(-360deg);
        }
    }
    @keyframes spin {
        0%,
        100% {
            box-shadow: .2em 0px 0 0px currentcolor;
        }
        12% {
            box-shadow: .2em .2em 0 0 currentcolor;
        }
        25% {
            box-shadow: 0 .2em 0 0px currentcolor;
        }
        37% {
            box-shadow: -.2em .2em 0 0 currentcolor;
        }
        50% {
            box-shadow: -.2em 0 0 0 currentcolor;
        }
        62% {
            box-shadow: -.2em -.2em 0 0 currentcolor;
        }
        75% {
            box-shadow: 0px -.2em 0 0 currentcolor;
        }
        87% {
            box-shadow: .2em -.2em 0 0 currentcolor;
        }
    }
`;

export const Wrapper = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    overflow: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
`;

export const Content = styled.div<ContentTypo>`
    width: 100%;
    flex: 1;
    position: relative;
    overflow: hidden;
    padding-top: 160px;
    padding-bottom: 218px;
    ${({ background_image }) => background_image && css`
        background: url(${background_image}) center 0 / cover no-repeat;
    `}      
    > * {
        position: relative;
        z-index: 2;
    }
    &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        content: '';
        background: linear-gradient(0deg, rgba(4, 20, 161, 0.00) 39.57%, rgba(4, 20, 161, 0.20) 55.41%), linear-gradient(0deg, rgba(4, 20, 161, 0.20) 0%, rgba(4, 20, 161, 0.20) 100%);
    }
    display: flex;
    justify-content: center;
    @media screen and (max-width: ${props => props.theme.screenLgMin}) {
        padding-left: 24px;
        padding-right: 24px;
    }    
`;

export const Footer = styled.footer`
    width: 100%;
    p {
        font-family: "Inter", sans-serif;
    }
`;

export const Inner = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 105px 0;
    width: 100%;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        width: auto;
    }
`;

export const Logo = styled.h1`

`;

export const GlobalStyle = createGlobalStyle`
    @keyframes opacity {
        from {
            opacity: 0;
            visibility: hidden;
        }

        to {
            opacity: 1;
            visibility: visible;
        } 
    }
    body {
        animation: opacity 600ms forwards;
    }
`;