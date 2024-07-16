import styled, {css, createGlobalStyle} from "styled-components";

export const Columns = styled.div`
    position: relative;
    z-index: 4;
    gap: 32px 0;
    @media screen and (min-width: ${props => props.theme.screenLgMin}) {
        gap: 0 32px
    }
`;

export const Column = styled.div`
    position: relative;
    gap: 32px 0;
    margin: 0 -16px;
    
    img {
        position: absolute;
        top: -1.5em;
        bottom: 1.5em;
    }
    
    @media (min-width:767px) and (max-width:959px) {
        img {
            width: 250px;
            top: -1.6em;
            bottom: 1.6em;
        }
    }

    @media (min-width:320px) and (max-width:767px) {
        img {
            width: 140px;
            height: 155px;
            top: 27.7em;
            right: -2em;
            bottom: 1.6em;
        }
    }
`;

export const Container = styled.div`
`;

export const Content = styled.section`
   position: relative;
`;

export const Mask = styled.svg`   
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    top: -8em;
    left: 0;
    height: 300px;
    flex-shrink: 0;
`;
