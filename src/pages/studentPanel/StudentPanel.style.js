import styled from "styled-components"
import { theme } from "../../themes.js"
import bgImage from "../../assets/img/wallpaper_tesouro.png"

export const PageContainer = styled.div`
    background: ${theme.colors.deepBlue};
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    text-align: center;

    label{
        color: ${theme.colors.creamWhite};
    }

    p {
        color: ${theme.colors.creamWhite};
    }
`;

export const ButtonClose = styled.button`
    background: ${theme.colors.darkBlue};
    color: ${theme.colors.lightRed};
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    border-radius: 20px;
    border: 2px solid ${theme.colors.lightRed};
    display: flex;
    height: 40px;
    width: 40px;
    margin-right: 10px;
    margin-top: 130px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    right: 0;

    &:hover{
        cursor: pointer;
    }
`;

export const BoxCoin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    background-color: rgba(255,255,255,0.1);
    color: ${theme.colors.lightYellow};
    height: 100px;
    width: 100px;
    border-radius: 10px;

    label{
        color: ${theme.colors.lightYellow};
        font-size: 40px;
        margin: 0px;
    }

    p {
        font-size: 20px;
    }
`;