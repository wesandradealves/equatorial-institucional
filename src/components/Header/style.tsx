import styled, {css, createGlobalStyle} from "styled-components";

interface HeaderTypo {
    is_scrolling: any;
}

export const Container = styled.header`   
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    padding: ${props => props.theme.spacingSm};
    transition: 250ms ease-in-out all;
    &.sticky {
        padding: ${props => props.theme.spacingSm};
        .container {
            background: rgba(0,0,0,.2);  
        }
    }
    @media screen and (min-width: ${props => props.theme.screenXxlMin}) {
        padding: 0 ${props => props.theme.spacingSm};
    }
`;

export const HeaderBottom = styled.div<HeaderTypo>`
    .container {
        background: rgba(255, 255, 255, .3);
        backdrop-filter: blur(40px);  
        border-radius: 999px;
        padding: 16px;
        @media screen and (min-width: ${props => props.theme.screenXxlMin}) {
            padding: 32px 52px;       
        }
        .nav {
            @media screen and (min-width: ${props => props.theme.screenWideMin}) {
                gap: 0 ${props => props.theme.spacingSm};
            }   
            &-col {
                .nav-item {
                    color: white;
                    position: relative;
                    .nav-link {
                        color: inherit;
                        gap: 0 8px;
                        @media screen and (min-width: ${props => props.theme.screenLgMin}) {
                            &:hover {
                                color: ${props => props.theme.colorHighlight300};
                            }
                        }                        
                    }
                    .nav-submenu {
                        padding: 32px 25px;
                        gap: 16px 0;
                        background: ${props => props.theme.colorPrimary100};
                        position: absolute;
                        top: calc(100% + 16px);
                        left: 0;  
                        box-shadow: 0px 10px 30px -10px rgba(255,255,255,.5);
                        min-width: 340px;
                        .nav-item {
                            color: ${props => props.theme.colorPrimary300}; 
                            font-weight: 600;
                            .nav-link {
                                color: inherit;
                                padding-top: 0;
                                padding-bottom: 0;
                                @media screen and (min-width: ${props => props.theme.screenLgMin}) {
                                    &:hover {
                                        color: black;
                                    }
                                }
                            }
                        }          
                    }
                }
            }
        }
        .search-icon {
            height: 48px;
            width: 48px;
            border-radius: 999px;
            background-color: white; 
            padding: 10px;  
            color: ${props => props.theme.colorPrimary300};
        }             
    }  
`;

export const Logo = styled.a`
    flex: 1;
    @media screen and (min-width: ${props => props.theme.screenXxlMin}) {
        flex: 0 0 auto
    }
`;

export const Hamburger = styled.div`
    padding: 0;
    margin: 0;
    height: 48px;
    width: 48px;
    border-radius: 999px;
    background-color: white;
    .hamburger {
        padding: 0;
        height: 25px;
        transform: scale(.7);
        &-inner, 
        &-inner::before, 
        &-inner::after {
            width: 30px;
            height: 3px;
            margin: 0;
            background-color: ${props => props.theme.colorPrimary300};
        }
        &.is-active {
            .hamburger-inner, 
            .hamburger-inner::before, 
            .hamburger-inner::after {
                background-color: ${props => props.theme.colorPrimary300};
            }        
        }
        &-box {
            width: 30px;
            height: 25px;
        }
    }
`;

