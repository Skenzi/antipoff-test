import { FormEvent, useEffect, useState } from "react";
import { isValidEmail, validateData } from "../features/validation";
import { useNavigate, Link } from "react-router-dom";
import { getToken } from "../features/authorize";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [webError, setWebError] = useState('');
    const navigate = useNavigate()
    useEffect(() => {
        if(getToken()) navigate('/')
    })
    const submitHandler = (ev: FormEvent) => {
        ev.preventDefault()
        const dataForSend = JSON.stringify({
            email,
            password,
        })
        // Логика отправки данных
        const responce = new Promise((resolve, reject) => {
            //reject('Web error')
            return resolve('token1234')
        })
        responce.then((data: string) => {
            localStorage.setItem('token', data)
            navigate('/')
        }).catch((error) => {
            setWebError(error)
        })
    }
    return (
        <section className="form-wrapper">
            <h2 className="form-title">Авторизация</h2>
            <form noValidate onSubmit={submitHandler}>
                <label className="form-group">
                    <span className="form-group__title">Электронная почта</span>
                    <input className="form-group__input" value={email} required placeholder="Электронная почта" onInput={(ev) => {
                        setEmailError('')
                        setEmail(ev.currentTarget.value)
                        if(!isValidEmail(ev.currentTarget.value)) setEmailError('No valid email')
                    }} />
                    {emailError ? <div className="form__error">{emailError}</div> : null}
                </label>
                <label className="form-group">
                    <span className="form-group__title">Пароль</span>
                    <input className="form-group__input" type="password" value={password} onInput={(ev) => setPassword(ev.currentTarget.value)} required placeholder="Пароль" />
                </label>
                {webError ? <div className="form__error">{webError}</div> : null}
                <button className="form__button" type="submit">Войти</button>
            </form>
            <div className="form-footer">
                Вы зарегистрированы? <Link to="/signup">Зарегистрируйся</Link>
            </div>
        </section>
    )
}

export default SignIn;