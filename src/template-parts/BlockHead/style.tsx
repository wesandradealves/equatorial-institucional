import styled, {css, createGlobalStyle} from "styled-components";

export const Container = styled.div`
         
`;

export const Text = styled.div`
    font-size: ${props => props.theme._fonts.mobile.bodyLarge1.fontSize}; 
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        font-size: ${props => props.theme._fonts.mobile.subtitle1.fontSize}; 
    }
    max-width: ${props => props.theme._breakpoints.desktop.lg};
`;

export const BlockTitle = styled.div`
    font-size: ${props => props.theme._fonts.mobile.header1.fontSize};
    line-height: 2.5rem;
    
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        font-size: ${props => props.theme._fonts.desktop.header3.fontSize};
    }

    * {
        font-size: inherit;
    }

    strong {
        font-weight: 600
    }         
`;

export const BlockHeading = styled.div`
    gap: 53px 0;
    @media screen and (min-width: ${props => props.theme._breakpoints.desktop.lg}) {
        padding-right: 60px;
    }    
`;
