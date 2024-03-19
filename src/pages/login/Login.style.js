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
    /* overflow: hidden; */
    /* position: absolute; */
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
        border: 2px solid ${theme.colors.lightYellow}; // Muda a cor da borda para vermelho quando o input está em foco
    }
`;