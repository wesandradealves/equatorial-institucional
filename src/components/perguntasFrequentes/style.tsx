import styled from "styled-components";

export const Wrapper = styled.div`
    @keyframes opacity {
        from {
            opacity: 0;
            visibility: hidden;
        }

        to {
            opacity: 1;
            visibility: visible;
        }
    }
    position: relative;
    animation: opacity 600ms forwards;
    min-height: 100vh;
    overflow: auto;
    width: 100%;
    display: flex;
    flex-flow: column;
    padding: 0 10px;
`
export const Conteudo = styled.div`
    flex: 1;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-around;
`

export const ListMenu = styled.div`
    max-width: 635px;
    height: 440px;
    display: flex;
    justify-content: flex-start;
    padding-right: 20px;
    align-items: flex-start;
    flex-direction: column;
    overflow-y: scroll;
`

export const Actions = styled.div `
    display: flex;
    flex-flow: column;
    gap: 5rem;
    align-items: flex-start;
`
export const ImagemContainer = styled.div `
    width: 480px;
    overflow: hidden;
    display: flex;
    height: 84vh;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    
    @media (max-width: 1164px) {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        img {
            margin-right: -112px;
            margin-left: auto;
            display: block;
            width: 260px;
            height: 190px;
            object-fit: cover;
        }
    }
`

export const Title = styled.div `
    display: flex;
    padding-left: 176px;
    padding-top: 88px;

    h1 {
        letter-spacing: 0;
        text-decoration: none;
        font-family: Inter,sans-serif;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: 48px; /* 120% */
    }

    @media (max-width: 1164px) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        text-align: center;
        h1 {
            font-size:2.3rem;
            line-height:3rem;
            font-weight: 400;
            letter-spacing: 0;,
        text-decoration: none
        }
    }
`
