import styled, {css, createGlobalStyle} from "styled-components";

interface LocationSelectorTypo {
    onChange?: any;
}

export const Container = styled.div`
    margin-bottom: 16px;
    gap: 0 16px;
`;

export const Select = styled.div`
    padding: 8px 16px;
    border-radius: 999px;
    background-color: rgba(255,255,255,.3);
    backdrop-filter: blur(40px);  
    transition: 250ms ease-in-out box-shadow;
    &:hover {
        box-shadow: 0px 0px 0px 10px rgba(255,255,255,.05)
    }
`;

export const SelectField = styled.select<LocationSelectorTypo>`
    background: none;
    width: 107px;
    padding: 0;
    border: 0;
    outline: 0;
    cursor: pointer;
    color: white;
    font-size: ${props => props.theme.fontDesktop.bodyMedium1.fontSize};
    @media screen and (min-width: ${props => props.theme.screenLglMin}) {
        font-size: ${props => props.theme.fontDesktop.bodyLarge1.fontSize};
    }    
    option {
        color: black
    }    
`;

export const Option = styled.option`

`;

export const Label = styled.p`
    color: white;
    font-size: ${props => props.theme.fontDesktop.bodyMedium1.fontSize};
    @media screen and (min-width: ${props => props.theme.screenLglMin}) {
        font-size: ${props => props.theme.fontDesktop.bodyLarge1.fontSize};
    }    
`;