import { ChangeEventHandler, FormEvent, useEffect, useState } from "react";
import { isValidEmail, validateData } from "../features/validation";
import { useNavigate, Link } from "react-router-dom";
import { getToken } from "../features/authorize";
import { signin } from "../features/api";

const defaultErrors = {
    email: '',
    password: ''
}

const SignIn = () => {
    const [email, setEmail] = useState('eve.holt@reqres.in');
    const [password, setPassword] = useState('cityslicka');
    const [webError, setWebError] = useState('');
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate()
    useEffect(() => {
        if (getToken()) navigate('/')
    })
    const emailHandler: ChangeEventHandler<HTMLInputElement> = (ev) => {
        setEmail(ev.currentTarget.value)
        setErrors({ ...errors, email: validateData(email, isValidEmail) })
    }
    const submitHandler = (ev: FormEvent) => {
        ev.preventDefault()
        const dataForSend = JSON.stringify({
            email,
            password,
        })
        const newErrors = { ...defaultErrors }
        newErrors.email = validateData(email, isValidEmail)
        newErrors.password = password === '' ? 'Не соответствует шаблону' : ''
        if (newErrors.email || newErrors.password) {
            setErrors(newErrors);
            return;
        }
        const response = signin(dataForSend);
        response.then((data: { token: string }) => {
            sessionStorage.setItem('token', data.token)
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
                    <input className={`form-group__input` + (errors.email ? ' form-group__input--invalid' : '')} value={email} required placeholder="Электронная почта" onFocus={() => setErrors({ ...errors, email: '' })} onChange={emailHandler} />
                    {errors.email ? <div className="form__error">{errors.email}</div> : null}
                </label>
                <label className="form-group">
                    <span className="form-group__title">Пароль</span>
                    <input className={`form-group__input` + (errors.password ? ' form-group__input--invalid' : '')} type="password" value={password} onFocus={() => setErrors({ ...errors, password: '' })} onChange={(ev) => setPassword(ev.currentTarget.value)} required placeholder="Пароль" />
                    {errors.password ? <div className="form__error">{errors.password}</div> : null}
                </label>
                {webError ? <div className="form__error">{webError}</div> : null}
                <button className="form__button" type="submit">Войти</button>
            </form>
            <div className="form-footer">
                Вы зарегистрированы? <Link className="" to="/signup">Зарегистрируйся</Link>
            </div>
        </section>
    )
}

export default SignIn;