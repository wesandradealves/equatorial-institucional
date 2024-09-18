import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    html,
    body,
    div,
    span,
    object,
    iframe,
    figure,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    code,
    em,
    img,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    b,
    u,
    i,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    main,
    canvas,
    embed,
    footer,
    header,
    nav,
    section,
    video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    text-size-adjust: none;
    text-decoration: none;
    font-family: inherit;
    }

    html,
    body {
    line-height: 1.4;
    font-family: 'Inter', sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    overflow-x: hidden;
    min-width: ${props => props.theme._spacing.mobile.xxs};
    #__next {
        overflow-x: inherit;
    }
    }

    ol,
    ul {
    list-style: none;
    }

    blockquote,
    q {
    quotes: none;
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
    content: "";
    content: none;
    }

    table {
    border-collapse: collapse;
    border-spacing: 0;
    * {
        background-color: transparent;
        vertical-align: middle;
    }
    }

    input {
    -webkit-appearance: none;
    appearance: none; // Add the standard 'appearance' property
    border-radius: 0;
    font-family: inherit;
    }

    #primary {
    z-index: 1;
    position: relative;
    }

    .flex-fill {
    flex: 1 !important;
    }

    .container {
    padding-left: 24px;
    padding-right: 24px;
    max-width: 1568px;
    }

    .text-align-center {
    text-align: center;
    }

    .text-align-left {
    text-align: left;
    }

    .text-align-right {
    text-align: right;
    }

    .slick-slider {
    .slick-dots {
        position: relative;
        bottom: 0;
        margin-top: 24px;
        display: flex !important;
        gap: 0 6px;
        justify-content: center;
        align-items: center;
        li {
        height: 6px;
        width: 12px;
        margin: 0;
        transition: 600ms ease-in-out all;
        &[class*="active"] {
            width: 48px;
            button {
            background-color: ${props => props.theme._colors.primary.primary300};
            }
        }
        button {
            padding: 0;
            width: 100%;
            height: 100%;
            background-color: ${props => props.theme._colors.neutral.neutral400};
            border-radius: 6px;
            transition: 200ms ease-in-out all;
            &::before {
            content: initial;
            }
        }
        }
    }
    }

    .modal-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    -webkit-backdrop-filter: blur(24px);
    backdrop-filter: blur(24px);
    overflow: hidden;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    .modal-video-inner {
        width: 100%;
        .modal-video-movie-wrap {
        position: relative;
        background-color: black;
        padding: 35px 0 50% 0 !important;
        overflow: hidden;
        border-radius: 30px;
        &::after {
            content: "";
            width: 48px;
            height: 48px;
            border: 5px solid #fff;
            border-bottom-color: transparent;
            border-radius: 50%;
            display: inline-block;
            box-sizing: border-box;
            animation: rotation 1s linear infinite;
            position: absolute;
            top: calc(50% - 24px);
            left: calc(50% - 24px);
            z-index: 1;
        }
        iframe {
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
        }
        }
    }
    }

    body {
        &.error-page {
            .header {
                .topbar {
                    color: black;
                    .accessibility {
                        background: ${props => props.theme._colors.primary.primary300} !important;  
                    }
                    [class*="MuiSwitch-root"] {
                        .MuiSwitch-track {
                            background: ${props => props.theme._colors.primary.primary300} !important;  
                        }
                        &::after, &::before {
                            color: white !important;
                        }
                    }
                }
                [class*="HeaderBottom"] {
                    > .container {
                        background: ${props => props.theme._colors.primary.primary300};    
                        box-shadow: 0px 5px 20px -20px black;
                    }
                }
            }
        }
    }
`;

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