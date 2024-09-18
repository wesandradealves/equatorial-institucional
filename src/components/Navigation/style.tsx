import styled, {css, createGlobalStyle} from "styled-components";

export const Container = styled.div`   
`;

export const Nav = styled.nav`
`;

export const NavCol = styled.ul`
    gap: 0 32px;
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.xxl}) {
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
    font-size: ${props => props.theme._fonts.desktop.bodyLarge1.fontSize};  
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

export const PanelBottom = styled.div`
`;

export const Panel = styled.nav`
    position: fixed;
    padding: 143px 24px 24px;
    background: ${props => props.theme._colors.primary.primary300};  
    z-index: 10;
    top: 0;
    transition: 600ms ease-in-out all;
    opacity: 0;
    left: -100%;
    &.is-visible {
        opacity: 1;
        left: 0;
    }
    width: 100%;
    height: 100%;
    .inner {
        gap: 51px 0;
        .searchbar {
            max-width: initial;
            input {
                text-align: center;
                padding-right: 24px;
            }
        }
        .location-selection {
            margin: 0;
            [class*="Label"] {
                font-size: ${props => props.theme._fonts.desktop.bodySmall1.fontSize}; 
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                max-width: 63px;    
                @media screen and (min-width: ${props => props.theme._breakpoints.mobile.xs}) {
                    max-width: initial;
                }            
            }
            [class*="Select"] {
                padding: 0;
                background: none;
                box-shadow: initial;
                font-size: ${props => props.theme._fonts.desktop.bodySmall1.fontSize}; 
            }
        }
        .topbar {
            .container {
                padding: 0;
                justify-content: flex-end !important;
                .MuiSwitch-root {
                    margin: 0;
                }                
            }
        }
        .nav {
            color: white;
            max-height: 300px;
            overflow-y: auto;
            flex-wrap: nowrap;
            &-link {
                padding-left: 0;
                color: inherit;
            }
        }
    }
`;