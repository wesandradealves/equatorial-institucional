import styled, {css, createGlobalStyle} from "styled-components";

export const AccordionWrapper = styled.div`
`;

export const Item = styled.article`
    padding: 24px 16px;
    border-bottom: 2px ${props => props.theme._colors.neutral.neutral400} solid;
    gap: 12px 0;
`;

export const Title = styled.h3`
    cursor: pointer;
    font-size: ${props => props.theme._fonts.mobile.linkText.fontSize};
    font-weight: 600;
    span {
        font-size: inherit;
    }
`;

export const Text = styled.div`
    font-size: ${props => props.theme._fonts.mobile.linkText.fontSize};
    line-height: 1.4;
`;

export const Arrow = styled.i`
`;