import styled, {css, createGlobalStyle} from "styled-components";

export const Container = styled.nav`

`;

export const Navigation = styled.ul`
    gap: 0 24px;
`;

export const NavigationItem = styled.li`
    // color: white;
    color: ${props => props.theme.colorPrimary300};    
    font-size: ${props => props.theme.fontDesktop.bodyLarge1.fontSize};
    height: 40px;
    padding: 0 14px;
    &.increaser {
        height: 64px;
        border: 1px ${props => props.theme.colorPrimary300} solid;
        width: 64px;
        &:hover {
            background: ${props => props.theme.colorPrimary300};
            color: white;
        }
        border-radius: 999px;
    }
    a {
        color: inherit;
        &.current {
            font-weight: bold;
        }
    }
`;