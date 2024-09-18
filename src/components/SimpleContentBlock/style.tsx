import styled, {css, createGlobalStyle} from "styled-components";

export const Content = styled.section`   

`;

export const Container = styled.div`   
    gap: 24px 0;
`;

export const Text = styled.div`   
    table {
        background-color: ${props => props.theme._colors.neutral.neutral200};
        padding: 0 8px;
        border-radius: 16px;
        border-collapse: separate;
        border-spacing: 16px 24px;
        min-width: 100%;
        @media screen and (min-width: ${props => props.theme._breakpoints.mobile.md}) {
            min-width: 768px;
        }
        tr {
            td {
                font-size: ${props => props.theme._fonts.desktop.bodyLarge1.fontSize};  
            }
            &:first-of-type {
                td {
                    background: ${props => props.theme._colors.primary.primary300};  
                    color: white;
                    padding: 8px 16px;
                    border-radius: 8px;
                }
            }
        }
    }
`;
