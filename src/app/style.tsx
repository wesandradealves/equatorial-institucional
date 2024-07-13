import styled, {css, createGlobalStyle} from "styled-components";

export const App = styled.div`
    &.modal-opened {
        .hero,
        header {
            z-index: 1;
        }
    }
`;