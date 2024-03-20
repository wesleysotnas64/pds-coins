import styled from "styled-components"
import { theme } from "../../themes.js"

export const PageContainer = styled.div`
    background: ${theme.colors.deepBlue};
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & label{
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
    height: 60px;
    width: 60px;
    margin: 10px;

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