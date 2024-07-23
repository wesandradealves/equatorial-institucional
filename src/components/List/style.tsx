import styled, {css, createGlobalStyle} from "styled-components";

export const Content = styled.section`  
    background-color: ${props => props.theme.colorPrimary100}; 
    &:last-of-type {
        margin-bottom: -88px;
        @media screen and (min-width: ${props => props.theme.screenLgMin}) {
            margin-bottom: -179px;
        }
    }
`;

export const Container = styled.div`   
    padding-top: 40px;
    padding-bottom: 40px;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        padding-top: 102px;
        padding-bottom: 102px;
    }
`;

export const Column = styled.div`   

`;

export const Text = styled.div`   
    font-size: ${props => props.theme.fontMobile.bodySmall1.fontSize};
    color: ${props => props.theme.colorNeutral600};
`;

export const Title = styled.h3`   
    font-size: ${props => props.theme.fontMobile.subtitle1.fontSize};
`;

export const Arrow = styled.i`   
    flex: 0 0 auto;
    height: 20px;
    width: 20px;
    border-radius: 999px;
    border: 2px black solid;
    padding: 9px;    
`;

export const ListGroup = styled.ul`   

`;

export const ListItem = styled.li`  
    cursor: pointer;
    padding: 14px 16px;
    border-bottom: 1px rgba(0,0,0,.1) solid;
`;

export const Inner = styled.div`   
    gap: 5px 0;
`;