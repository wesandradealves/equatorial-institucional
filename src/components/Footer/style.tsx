import styled, {css, createGlobalStyle} from "styled-components";

export const Container = styled.footer`
    background: ${props => props.theme._colors.primary.primary300};    
`;

export const Contact = styled.div`
    background: white;
    overflow: hidden;
    position: relative;
    .container {
        @media screen and (max-width: ${props => props.theme._breakpoints.desktop.lg}) {
            max-width: initial;
            padding: 0
        } 
    }
`;

export const ColText = styled.p`
    white-space: pre-line;
    color: ${props => props.theme._colors.primary.primary300}; 
    font-size: ${props => props.theme._fonts.desktop.bodySmall1.fontSize};  
`;

export const ContactCol = styled.div`
    padding: 43px ${props => props.theme._spacing.mobile.sm};
    position: relative;
    &:first-of-type {
        @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
            padding-left: 0;
            & ~ :last-of-type {
                padding-right: 0
            }
        }     
    }
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        padding: 43px 48px;
    }     
    &.phone {
        .inner {
            p {
                line-height: initial;
                white-space: initial;
                @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
                    line-height: 2;
                    whites-space: pre-line;
                }
                @media screen and (max-width: ${props => props.theme._breakpoints.desktop.lg}) {
                    gap: ${props => props.theme._spacing.mobile.sm} 0;
                    > span {
                        gap: 0 8px;

                        > span {
                            flex: 1;
                            &:last-of-type:not(:only-of-type) {
                                background: ${props => props.theme._colors.primary.primary150};
                                padding: 8px;
                                border-radius: 999px;
                                display: flex;
                                align-items: center;
                                gap: 0 6px;
                                width: 100%;
                            } 
                        } 
                    }
                    // > span {
                    //     flex: 0 0 50%;
                    //     padding-right: 14px;
                    //     &:nth-child(2n+2) {
                    //         padding-right: 0;
                    //         padding-left: 14px;
                    //         display: flex;
                    //         @media screen and (max-width: ${props => props.theme._breakpoints.desktop.lg}) {
                    //             flex: 1;
                    //             @media screen and (max-width: ${props => props.theme._breakpoints.mobile.sm}) {
                    //                 flex: 0 0 auto;
                    //             }                                
                    //         }
                    //         > span {
                    //             background: ${props => props.theme._colors.primary.primary150};
                    //             padding: 2px 8px;
                    //             border-radius: 999px;
                    //             display: flex;
                    //             align-items: center;
                    //             gap: 0 6px;
                    //             width: 100%;
                    //         }
                    //     }
                    // }
                }
            }
        }
    }
    &.talktous {
        background: ${props => props.theme._colors.primary.primary100};
    }
    &.talktoclara {
        background: ${props => props.theme._colors.highlight.highlight300};
        &::after {
            content: "";
            position: absolute;
            top: 0;
            margin: 0 -1px;
            left: 100%;
            background: inherit;
            height: 100%;
            display: block;
            width: 100vw;
        }
        .inner {
            > span {
                padding-right: 100px;
                @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
                    padding-right: 130px;
                }
            }
            img {
                position: absolute;
                right: ${props => props.theme._spacing.mobile.sm};
                bottom: 0;
                max-width: 96px;
                @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
                    max-width: 127px;
                    right: 0;
                }
            }
        }
    }
`;

export const Anchor = styled.a`
    font-weight: bold;
    text-decoration: underline;
    margin-top: 16px;
    display: block;
    color: inherit;
    &:hover {
        text-decoration: none;
    }
`;


export const FooterTop = styled.div`
    .container {
        padding-top: 40px;
        padding-bottom: 40px;   
        gap: 40px 0; 
        @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
            padding-top: 90px;
            padding-bottom: 90px;
            gap: 0 ${props => props.theme._spacing.mobile.sm};
        }
        color: white;
        @media screen and (max-width: ${props => props.theme._breakpoints.desktop.lg}) {
            max-width: initial;
        } 
        .nav {
            gap: 26px 0;
            @media screen and (min-width: ${props => props.theme._breakpoints.mobile.md}) {
                padding-right: 128px;
                @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
                    gap: 0
                } 
            }       
            color: white;
            &-col {
                &:not(:last-of-type) {
                    border-bottom: 1px white solid;
                    padding-bottom: 26px;
                    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
                        border: 0;
                        padding: 0
                    }
                }
                .nav-item {
                    gap: 26px 0;
                    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
                        gap: 40px 0
                    }
                    .nav-link {
                        padding: 0 16px;
                        color: white;
                        @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
                            padding: 0;
                            [class*="fa-"] {
                                display: none
                            }
                        }
                        &:first-of-type:not(:only-child) {
                            font-weight: 600;
                        }
                        &:not(:first-of-type:not(:only-child)):hover {
                            @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
                                color: ${props => props.theme._colors.highlight.highlight300}
                            }
                        }
                    }
                    .nav-submenu {
                        gap: 26px 0;
                        @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
                            gap: inherit;
                            display: flex !important
                        }                    
                    }
                }
            }
        }       
    }
`;

export const SocialNetworks = styled.ul`
    gap: ${props => props.theme._spacing.mobile.sm};
`;

export const SocialItem = styled.li`
`;

export const SocialLink = styled.a`
    color: inherit;
    font-size: 1.8rem;
    &:hover {
        @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
            color: ${props => props.theme._colors.highlight.highlight300}
        }
    }
`;

export const Label = styled.p`
`;

export const Apps = styled.div`
    gap: 18px ${props => props.theme._spacing.mobile.sm};
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        gap: 0 ${props => props.theme._spacing.mobile.sm}
    }        
`;