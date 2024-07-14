import styled, {css, createGlobalStyle} from "styled-components";

export const App = styled.div`
    min-height: 100vh;
    &.modal-opened {
        .hero,
        header {
            z-index: 1;
        }
    }
`;