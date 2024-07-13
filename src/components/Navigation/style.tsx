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
`;

export const NavLink = styled.a`
    gap: 0 12px;
    color: white;
    [class*="fa-"] {
        transition: 250ms ease-in-out all;
    }
    &:hover {
        color: ${props => props.theme.colorHighlight300};
        @media screen and (min-width: ${props => props.theme.screenLgMin}) {
            [class*="fa-"] {
                transform: rotate(180deg)
            }
        }
    }
    font-size: ${props => props.theme.fontDesktop.bodyLarge1.fontSize};  
`;

export const NavSubmenu = styled.ul`
`;

export const Arrow = styled.i`
`;