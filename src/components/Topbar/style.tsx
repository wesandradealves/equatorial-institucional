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
    cursor: pointer;
`;

export const Ico = styled.svg`
    border-radius: 999px;
    transition: 500ms ease-in-out all;
    box-shadow: 0px 0px 0px 10px rgba(255,255,255,.5);
    height: 30px;
    width: 30px;
    border: 2px white solid;
    padding: 2px;
    &:hover {
        box-shadow: 0px 0px 0px 5px rgba(255,255,255,.8);
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
    font-size: ${props => props.theme.fontDesktop.bodyMedium1.fontSize};
`;