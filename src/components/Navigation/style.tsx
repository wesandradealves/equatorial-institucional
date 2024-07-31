import styled, {css, createGlobalStyle} from "styled-components";

export const Container = styled.div`   
`;

export const Nav = styled.nav`
`;

export const NavCol = styled.ul`
    gap: 0 32px;
    @media screen and (min-width: ${props => props.theme.screenXxlMin}) {
        gap: 0 64px;
    }
`;

export const NavItem = styled.li`
    color: white;
`;

export const NavLink = styled.span`
    gap: 0 12px;
    color: inherit;
    [class*="fa-"] {
        transition: 250ms ease-in-out all;
    }
    &:hover {
        color: inherit;
    }
    font-size: ${props => props.theme.fontDesktop.bodyLarge1.fontSize};  
`;

export const NavSubmenu = styled.ul`
    &.lvl-2 {
        top: 0 !important;
        left: initial !important;
        right: -100%;
        box-shadow: -15px -10px 20px -28px black !important;
        display: none;
        z-index: 2;
    }
    &.lvl-1 {
        > .nav-item {
            &:hover .lvl-2 {
                display: flex;
            }         
        }
    }
`;

export const Arrow = styled.i`
    cursor: pointer;
`;