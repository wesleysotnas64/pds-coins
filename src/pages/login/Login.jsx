import { useState } from "react";
import { InputRegistration, PageContainer } from "./Login.style";

export function Login () {

    const [registration, setRegistration] = useState("");

    const handleRegistrationChange = (event) => {
        const newValue = event.target.value;

        if (!isNaN(newValue) && (newValue.length <= 6 || (registration.length === 6 && newValue.length < registration.length))) {
            setRegistration(newValue);
        }
    };

    return (
        <PageContainer>
            <InputRegistration
                placeholder="Matrícula"
                value={registration}
                onChange={handleRegistrationChange}
            />
        </PageContainer>
    );
}