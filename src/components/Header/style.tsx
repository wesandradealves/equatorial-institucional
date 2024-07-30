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
            width: 100%;
        }
    }
    @media screen and (min-width: ${props => props.theme.screenXxlMin}) {
        padding: 0 ${props => props.theme.spacingSm};
    }
`;
export const Content = styled.div<HeaderTypo> `
    z-index: 1;
    &::after {
        z-index: -1;
        border-radius: 999px;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background: ${props => props.is_scrolling > 0 ? 'rgba(0,0,0,.2)' : 'rgba(255, 255, 255, .3)'};
        backdrop-filter: blur(40px);
        position: absolute;
        content: '';
    }
`

export const HeaderBottom = styled.div<HeaderTypo>`
    position: relative;
    .container {
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
                &.is-expanded {
                    background: ${props => props.theme.colorPrimary100};
                    border-radius: 999px;
                    .nav-item {
                        .nav-link {
                            color: ${props => props.theme.colorPrimary300}
                        }
                    }
                }
                .nav-item {
                    color: white;
                    position: relative;
                    .nav-link {
                        color: inherit;
                        gap: 0;
                    }
                    .nav-submenu {
                        padding: 40px;
                        gap: 32px 0;
                        border-radius: 40px;
                        background: ${props => props.theme.colorPrimary100};
                        position: absolute;
                        top: calc(100% + 44px);
                        left: calc(50% - 200px);  
                        box-shadow: 0px 10px 30px -10px rgba(255,255,255,.5);
                        min-width: 400px;
                        .nav-item {
                            color: ${props => props.theme.colorPrimary300};
                            font-weight: 600;
                            font-size: ${props => props.theme.fontDesktop.bodyLarge1.fontSize};
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

