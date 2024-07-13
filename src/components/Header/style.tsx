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
    &.sticky {
        padding: ${props => props.theme.spacingSm}
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
            gap: 0 32px;
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

