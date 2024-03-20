import PropTypes from "prop-types";
import { ButtonClose, PageContainer } from "./StudentPanel.style";

export function StudentPanel({ student, onClickToClose }) {

    const handleCloseButtonClick = () => {
        onClickToClose();
    };

    return (
        <PageContainer>
            <ButtonClose onClick={handleCloseButtonClick}>X</ButtonClose>
            <label>{student.name} - {student.registration}</label>
            <p>Você possui {student.totalCoins} moedas</p>
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