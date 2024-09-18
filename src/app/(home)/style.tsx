import styled, {css, createGlobalStyle} from "styled-components";

interface ContentTypo {
    background_image: string;
}

export const ListNav = styled.nav`
    flex: 0 0 auto;
    display: flex;
    min-width: 100%;
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        //padding: 40px 56px;
        min-width: 512px;
    }
`;

export const Nav = styled.ul `
    padding: ${props => props.theme._spacing.mobile.sm};
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.20);
    backdrop-filter: blur(40px);
    
    @media (min-width: ${props => props.theme._breakpoints.mobile.md}) {
        width: 502px;
    }
`

export const Navigation = styled.div`
`;

export const NavItem = styled.li`
    padding: 24px 16px;
    //width: 502px;
    width: 100%;
    color: white;
    position: relative;
    transition: 300ms ease-in-out all;
    & {
        &:not(:last-child) {
            border-bottom: 1px white solid;
        }

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
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    color: white;
    flex: 1;
    text-align: center;
    font-size: 2.5rem;
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        text-align: initial;
        font-size: 5rem;
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
    //display: flex;
    //justify-content: center;
    @media screen and (max-width: ${props => props.theme._breakpoints.desktop.lg}) {
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
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        width: auto;
    }
`;

export const Logo = styled.h1`

`;
