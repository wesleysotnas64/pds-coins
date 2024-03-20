import { useState } from "react";
import { ButtonSeeCoins, InputRegistration, PageContainer } from "./Login.style";
import { StudentPanel } from "../studentPanel/StudentPanel";
import { students } from "../../data/pds2024_1";

export function Login () {

    const [registration, setRegistration] = useState("");
    const [showingCurrentStudent, setShowingCurrentStudent] = useState(false);
    const [studentIndex, setStudentIndex] = useState(-1);

    const handleRegistrationChange = (event) => {
        const newValue = event.target.value;

        if (!isNaN(newValue) && (newValue.length <= 6 || (registration.length === 6 && newValue.length < registration.length))) {
            setRegistration(newValue);
        }
    };

    const handleButtonSeeCoinsClick = () => {
        setStudentIndex(students.findIndex(student => student.registration === registration));
        
        if (studentIndex !== -1) {
            setShowingCurrentStudent(true);
        }
    };

    const handleClickToCloseStudentPanel = () => {
        setShowingCurrentStudent(false);
        setRegistration("");
        setStudentIndex(-1);
    }

    return (
        <>
            {
                showingCurrentStudent ? 
                (
                    <>
                        <StudentPanel student={students[studentIndex]} onClickToClose={handleClickToCloseStudentPanel}/>
                    </>
                ) :
                (
                    <PageContainer>
                        <InputRegistration
                            placeholder="Matrícula"
                            value={registration}
                            onChange={handleRegistrationChange}
                        />
                        <ButtonSeeCoins
                            onClick={handleButtonSeeCoinsClick}
                        >
                            {">"}
                        </ButtonSeeCoins>
                    </PageContainer>
                )
            }
        
        </>
    );
}