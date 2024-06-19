import { FormEvent, useEffect, useState } from "react";
import { isValidEmail } from "../features/validation";
import { useNavigate, Link } from "react-router-dom";
import { getToken } from "../features/authorize";
import { useAppDispatch } from "../hooks";
import { initUser } from "../store/slices/userSlice";
import { signin } from "../features/api";

const SignIn = () => {
    const [email, setEmail] = useState('eve.holt@reqres.in'); 
    const [password, setPassword] = useState('cityslicka');
    const [emailError, setEmailError] = useState('');
    const [webError, setWebError] = useState('');
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (getToken()) navigate('/')
    })
    const submitHandler = (ev: FormEvent) => {
        ev.preventDefault()
        const dataForSend = JSON.stringify({
            email,
            password,
        })
        const response = signin(dataForSend);
        response.then((data: { token: string}) => {
            sessionStorage.setItem('token', data.token)
            dispatch(initUser(data))
            navigate('/')
            console.log('go')
        }).catch((error) => {
            setWebError(error)
            console.log(error, 124)
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
                        if (!isValidEmail(ev.currentTarget.value)) setEmailError('No valid email')
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