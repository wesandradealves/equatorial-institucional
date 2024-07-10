import styled, {css, createGlobalStyle} from "styled-components";
interface HeroType {
    background_image?:string;
}

export const HeroContainer = styled.div<HeroType> `
    width: 100%;
    flex: 1;
    ${({ background_image }) => background_image && css`
        background: url(${background_image}) center 0 / cover no-repeat;
    `}
`
