import styled from "styled-components"
import { theme } from "../../themes.js"

export const Container = styled.div`
    background: ${theme.colors.darkBlue};
    /* height: 100px; */
    width: 100vw;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    position: absolute;
    text-align: center;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, .2);
    padding: 10px;

    h1 {
        color: ${theme.colors.creamWhite};
        font-size: 28px;
    }

    h3 {
        color: ${theme.colors.lightYellow};
        font-size: 20px;
        font-weight: lighter;
    }
`;
