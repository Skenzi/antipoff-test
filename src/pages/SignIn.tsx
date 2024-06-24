import { ChangeEventHandler, FormEvent, useEffect, useState } from "react";
import { isValidEmail, validateData } from "../utils/validation";
import { useNavigate, Link } from "react-router-dom";
import { getToken } from "../utils/authorize";
import SignInForm from '../modules/SignInForm';

const defaultErrors = {
    email: '',
    password: ''
}

const SignIn = () => {
    const [webError, setWebError] = useState('');
    const navigate = useNavigate()
    useEffect(() => {
        if (getToken()) navigate('/')
    })
    return (
        <section className="form-wrapper">
            <h2 className="form-title">Авторизация</h2>
            <SignInForm />
            <div className="form-footer">
                Вы зарегистрированы? <Link className="" to="/signup">Зарегистрируйся</Link>
            </div>
        </section>
    )
}

export default SignIn;