import styled, {css, createGlobalStyle} from "styled-components";
import { HeroTypo } from "../Hero/style";

export const Content = styled.section<HeroTypo>`   
    ${({ background_image }) => background_image && css`
        background: url(${background_image}) center center / cover no-repeat;
    `}  
`;

export const Mask = styled.svg`   
`;

