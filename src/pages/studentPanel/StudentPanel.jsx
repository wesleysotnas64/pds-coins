import PropTypes from "prop-types";
import { BoxCoin, ButtonClose, PageContainer } from "./StudentPanel.style";

export function StudentPanel({ student, onClickToClose }) {

    const handleCloseButtonClick = () => {
        onClickToClose();
    };

    return (
        <PageContainer>
            <ButtonClose onClick={handleCloseButtonClick}>X</ButtonClose>
            <label>{student.name} - {student.registration}</label>
            <p>Você possui</p>
            <BoxCoin>
                <label>{student.totalCoins}</label>
                <p>moedas</p>
            </BoxCoin>
             
        </PageContainer>
    );
}

StudentPanel.propTypes = {
    student: PropTypes.shape({
        name: PropTypes.string.isRequired,
        registration: PropTypes.string.isRequired,
        totalCoins: PropTypes.number,
    }).isRequired,
    onClickToClose: PropTypes.func.isRequired,
};