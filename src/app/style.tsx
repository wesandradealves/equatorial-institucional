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

export const ErrorPage = styled.div`
    padding-top: 128px;
    min-height: 568px;
    @media screen and (min-width: ${props => props.theme.screenMdMin}) {
        padding-top: 225px;
        min-height: 762px;
    }
    position: relative;
    * {
        gap: 16px;
        z-index: 2;
    }
`;

export const Mask = styled.svg`
    position: absolute;
    top: 88px;
    left: -1000px;
    @media screen and (min-width: ${props => props.theme.screenMdMin}) {
        left: calc(50% - 1500px);
        width: 3000px;
        top: 190px;
    }
    z-index: 1;
`;