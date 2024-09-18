import styled, {css, createGlobalStyle} from "styled-components";

export const Content = styled.nav`   
    margin-bottom: 2rem;
    width: 32px;
    height: 32px;
    @media screen and (min-width: ${props => props.theme._breakpoints.mobile.md}) {
        padding: 8px 16px;
        height: auto;
        width: auto;
    }
    border-radius: 999px;
    background-color: rgba(255,255,255,.05);
    backdrop-filter: blur(40px);  
    color: white;
    gap: 0 16px;
    font-size: ${props => props.theme._fonts.desktop.bodyMedium1.fontSize};  
    .nav-link {
        color: inherit;
        font-size: inherit;
        display: flex;
        align-items: center;
        gap: 0 16px;
        &:not(:last-of-type) {
            &::after {
                @media screen and (min-width: ${props => props.theme._breakpoints.mobile.md}) {
                    content: "|";
                }
                font-size: .4rem;
                position: relative;
                top: 1.5px;
            }   
        }
        &:last-of-type {
            color: rgba(255,255,255,.6)
        }
        &:hover {
            span {
                text-decoration: underline;
                color: ${props => props.theme._colors.highlight.highlight300};
            }
        }
    }
`;
