import styled, {css, createGlobalStyle} from "styled-components";

interface TopbarTypo {
    tariff: any;
}

export const Container = styled.div`
    color: white;
    .container {
        padding-top: 25px;
        padding-bottom: 25px;
    }
`;

export const Accessibility = styled.div`
    border-radius: 30px;
    background-color: rgba(255,255,255, .3);
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    
    &:hover {
        transform: scale(1.1);
    }
`;

export const Ico = styled.svg`
    border-radius: 30px;
    padding: 8px;
    path {
        fill: ${props => props.theme._colors.primary.primary100};
    }
`;

export const TariffBand = styled.div<TopbarTypo>`
    position: relative;
    gap: 0 72px;
    padding-left: 20px;
    ${({ tariff }) => tariff && css`
        &::before {
            position: absolute;
            top: calc(50% - 5px);
            left: 0;
            content: "";
            height: 10px;
            width: 10px;
            border-radius: 999px;
            display: inline-block;
            background: ${tariff};
        }
    `}  
`;

export const Text = styled.p`
    font-size: ${props => props.theme._fonts.desktop.bodyMedium1.fontSize};
`;
