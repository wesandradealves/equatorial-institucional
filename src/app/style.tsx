import styled, {css, createGlobalStyle} from "styled-components";

export const App = styled.div`
    min-height: 100vh;
    &.modal-opened {
        section {
            z-index: 1;
        }
        header, footer {
            z-index: 2;
        }
    }
`;