import styled, {css, createGlobalStyle} from "styled-components";

export const Container = styled.form`
    max-width: 190px;
    padding: 14px;
    background-color: white;
    border-radius: 999px;
`;

export const Inner = styled.div`
    gap: 0 4px
`;

export const Submit = styled.button`
    border: 0;
    background-color: initial;
    color: ${props => props.theme._colors.primary.primary300};
    font-size: ${props => props.theme._fonts.desktop.bodyLarge1.fontSize};  
`;

export const Input = styled.input`
    width: 100%;
    border: 0;
    background-color: initial;
    color: ${props => props.theme._colors.primary.primary300};    
    font-size: ${props => props.theme._fonts.desktop.bodySmall1.fontSize};  
    font-weight: 600;
    outline: none;
    box-shadow: none;
    &::placeholder {
        color: ${props => props.theme._colors.primary.primary300};
    }

    &::-ms-input-placeholder { /* Edge 12 -18 */
        color: ${props => props.theme._colors.primary.primary300};
    }    
`;