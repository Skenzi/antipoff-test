import { ChangeEventHandler, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";
import { isValidEmail, isValidUsername, validateData } from '../features/validation';
import { signup } from "../features/api";

const errorsDefault = {
    username: '',
    email: '',
    confirmPassword: '',
}

const SignUp = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [errors, setErrors] = useState(errorsDefault)
    const [webError, setWebError] = useState('')
    const navigate = useNavigate()

    const usernameHandler: ChangeEventHandler<HTMLInputElement> = (ev) => {
        setUsername(ev.target.value)
        const error = validateData(ev.currentTarget.value, isValidUsername)
        if (error) setErrors({ ...errors, username: error })
    }

    const emailHandler: ChangeEventHandler<HTMLInputElement> = (ev) => {
        setEmail(ev.currentTarget.value)
        const error = validateData(ev.currentTarget.value, isValidEmail)
        if (error) setErrors({ ...errors, email: error })
    }

    const submitHandler = (ev: FormEvent) => {
        ev.preventDefault();
        const newErrors = { ...errorsDefault };
        newErrors.email = validateData(email, isValidEmail);
        newErrors.username = validateData(username, isValidUsername);
        newErrors.confirmPassword = password === confirmPassword ? '' : 'Не совпадают';
        if (newErrors.email || newErrors.username || newErrors.confirmPassword) {
            setErrors(newErrors)
            return
        }
        const dataForSend = JSON.stringify({
            password,
            username,
            email
        })
        const response = signup(dataForSend);
        response.then((data: { token: string }) => {
            const parsedData = data;
            sessionStorage.setItem('token', parsedData.token)
            navigate('/')
        }).catch((error) => {
            setWebError(error)
        })
    }
    return (
        <section className="form-wrapper">
            <h2 className="form-title">Регистрация</h2>
            <form className="form" onSubmit={submitHandler} noValidate>
                <label className="form-group">
                    <span className="form-group__title">Имя</span>
                    <input required className={`form-group__input ${errors.username && 'form-group__input--invalid'}`} value={username} maxLength={16} onFocus={() => setErrors({ ...errors, username: '' })} onChange={usernameHandler} placeholder="Имя" />
                    {errors.username ? <div className="form__error">{errors.username}</div> : null}
                </label>
                <label className="form-group">
                    <span className="form-group__title">Электронная почта</span>
                    <input className={`form-group__input ${errors.email && 'form-group__input--invalid'}`} required placeholder="Электронная почта" value={email} onFocus={() => setErrors({ ...errors, email: '' })} onChange={emailHandler} type="email" />
                    {errors.email ? <div className="form__error">{errors.email}</div> : null}
                </label>
                <label className="form-group">
                    <span className="form-group__title">Пароль</span>
                    <input className="form-group__input" required placeholder="Пароль" value={password} onChange={(ev) => {
                        setPassword(ev.target.value)
                    }} type="password" />
                </label>
                <label className="form-group">
                    <span className="form-group__title">Подтвердить пароль</span>
                    <input className={`form-group__input ${errors.confirmPassword && 'form-group__input--invalid'}`} required placeholder="Подтвердить пароль" onFocus={() => setErrors({ ...errors, confirmPassword: '' })} value={confirmPassword} onChange={(ev) => {
                        setConfirmPassword(ev.target.value)
                    }} type="password" />
                    {errors.confirmPassword ? <div className="form__error">{errors.confirmPassword}</div> : null}
                </label>
                {webError ? <div className="form__error">{webError}</div> : null}
                <button className="form__button" type="submit">Зарегистрироваться</button>
            </form>
        </section>
    )
}

export default SignUp