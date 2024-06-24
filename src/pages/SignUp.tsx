import { ChangeEventHandler, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";
import SignUpForm from '../modules/SignUpForm';

const SignUp = () => {
    const [webError, setWebError] = useState('')
    const navigate = useNavigate()

    return (
        <section className="form-wrapper">
            <h2 className="form-title">Регистрация</h2>
            <SignUpForm />
        </section>
    )
}

export default SignUp