import styled from "styled-components"
import { theme } from "../../themes.js"

export const PageContainer = styled.div`
    background: ${theme.colors.deepBlue};
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InputRegistration = styled.input`
    background: ${theme.colors.darkBlue};
    color: ${theme.colors.lightYellow};
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    outline: none;
    border-radius: 20px;
    border: 1px solid ${theme.colors.lightYellow};
    display: flex;
    height: 60px;
    width: 200px;

    &:focus {
        border: 3px solid ${theme.colors.lightYellow}; // Muda a cor da borda para vermelho quando o input está em foco
    }
`;

export const ButtonSeeCoins = styled.button`
    background: ${theme.colors.darkBlue};
    color: ${theme.colors.lightYellow};
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    border-radius: 20px;
    border: 1px solid ${theme.colors.lightYellow};
    display: flex;
    height: 60px;
    width: 60px;
    margin-left: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        cursor: pointer;
    }
`;

export const MessageRegistration = styled.p`
    
`;