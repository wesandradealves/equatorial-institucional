import styled, {css, createGlobalStyle} from "styled-components";

interface TopbarTypo {
    tariff: any;
}

export const Container = styled.div`
`;

export const TariffBand = styled.div<TopbarTypo>`
    position: relative;
    ${({ tariff }) => tariff && css`
        &::after {
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
`;