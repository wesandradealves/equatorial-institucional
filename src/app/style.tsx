import styled, {css, createGlobalStyle} from "styled-components";

export const App = styled.div`
    min-height: 100vh;
    &.modal-opened {
        main {
            section {
                z-index: 1;
                &.video-active {
                    z-index: 2
                }
            }
        }
        main {
            z-index: 2;
        }
        header, footer {
            z-index: 1;
        }
    }
`;