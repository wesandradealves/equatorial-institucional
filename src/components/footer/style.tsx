import styled, {css, createGlobalStyle} from "styled-components";

export const Container = styled.footer`
    background: ${props => props.theme.colorPrimary300};    
`;

export const Contact = styled.div`
    background: white;
    overflow: hidden;
    position: relative;
    .container {
        @media screen and (max-width: ${props => props.theme.screenLgMin}) {
            max-width: initial;
            padding: 0
        } 
    }
`;

export const ColText = styled.p`
    white-space: pre-line;
    color: ${props => props.theme.colorPrimary300}; 
    font-size: ${props => props.theme.fontDesktop.bodySmall1.fontSize};  
`;

export const ContactCol = styled.div`
    padding: 43px 24px;
    position: relative;
    &:first-of-type {
        @media screen and (min-width: ${props => props.theme.screenLgMin}) {
            padding-left: 0;
            & ~ :last-of-type {
                padding-right: 0
            }
        }     
    }
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        padding: 43px 48px;
    }     
    &.phone {
        .inner {
            p {
                line-height: 2;
                @media screen and (max-width: ${props => props.theme.screenLgMin}) {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    white-space: initial;
                    gap: 24px 0;
                    > span {
                        flex: 0 0 50%;
                        padding-right: 14px;
                        &:nth-child(2n+2) {
                            padding-right: 0;
                            padding-left: 14px;
                            display: flex;
                            @media screen and (max-width: ${props => props.theme.screenLgMin}) {
                                flex: 1;
                                @media screen and (max-width: ${props => props.theme.screenSmMin}) {
                                    flex: 0 0 auto;
                                }                                
                            }
                            > span {
                                background: ${props => props.theme.colorPrimary150};
                                padding: 2px 8px;
                                border-radius: 999px;
                                display: flex;
                                align-items: center;
                                gap: 0 6px;
                                width: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
    &.talktous {
        background: ${props => props.theme.colorPrimary100};
    }
    &.talktoclara {
        background: ${props => props.theme.colorHighlight300};
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
            }
            img {
                position: absolute;
                right: 0;
                bottom: 0;
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
        @media screen and (min-width: ${props => props.theme.screenLgMin}) {
            padding-top: 90px;
            padding-bottom: 90px;
            gap: 0 24px;
        }
        color: white;
        @media screen and (max-width: ${props => props.theme.screenLgMin}) {
            max-width: initial;
        }        
    }
`;

export const Nav = styled.nav`
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        gap: 0 24px
    }  
`;

export const NavCol = styled.ul`
    padding: 26px 16px;
    border-bottom: 1px ${props => props.theme.colorPrimary200} solid;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        padding: 0;
        &:not(:last-of-type) {
            border: 0
        }
    }  
`;

export const NavItem = styled.li`
    gap: 40px 0;
    ul {
        li {
            &:not(:last-of-type) {
                @media screen and (max-width: ${props => props.theme.screenLgMin}) {
                    border-bottom: 1px ${props => props.theme.colorPrimary400} solid;
                    margin: 0 -16px -16px;
                    padding: 0 16px 24px;
                }
            }
        }
    }
`;

export const NavLink = styled.a`
    color: inherit;
    &:hover {
        text-decoration: underline
    }
    &:not(:only-child) {
        @media screen and (min-width: ${props => props.theme.screenLgMin}) {
            font-weight: bold;
        }          
        &:hover {
            text-decoration: initial
        }
    }
`;

export const NavSubmenu = styled.ul`
    gap: 40px 0;
`;

export const Arrow = styled.i`
    cursor: pointer;
`;

export const SocialNetworks = styled.ul`
    gap: 24px;
`;

export const SocialItem = styled.li`
`;

export const SocialLink = styled.a`
    color: inherit;
    font-size: 1.8rem;
`;

export const Label = styled.p`
`;

export const Apps = styled.div`
    gap: 18px 24px;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        gap: 0 24px
    }        
`;