import styled, {css, createGlobalStyle} from "styled-components";
interface HeroType {
    backgroundImage:string;
}

export const HeroContainer = styled.div<HeroType> `
    width: 100%;
    flex: 1;
    ${({ backgroundImage }) => backgroundImage && css`
        background: url(${backgroundImage}) center 0 / cover no-repeat;
    `}
`
