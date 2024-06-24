import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";
import { isValidEmail, isValidPassword, isValidUsername, validateData } from '../utils/validation';
import { Formik, Field, Form, FormikHelpers, FormikValues, ErrorMessage } from "formik";
import { registerUser } from "../utils/api";
import { setToken } from "../utils/authorize";

interface FormValuesProps {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}

const SignUpForm = () => {
    const [webError, setWebError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (values: FormValuesProps) => {
        console.log('enter in Subm')
        const dataJson = JSON.stringify(values)
        const response = registerUser(dataJson)
        response.then((data) => {
            console.log(data)
            setToken(data)
            navigate('/')
        }).catch((error) => {
            setWebError(error)
        })
    }

    const initialValues: FormValuesProps = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    return (
        (
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validate={(values) => {
                    const errors = {
                        username: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                    };

                    errors.username = validateData(values.username, isValidUsername)
                    errors.email = validateData(values.email, isValidEmail)
                    errors.password = validateData(values.password, isValidPassword)
                    errors.confirmPassword = values.password === values.confirmPassword ? '' : 'Не совпадают'
                    return errors;
                }}
            >
                {({ values, errors, touched, handleBlur, handleChange, isSubmitting, setSubmitting }) => {
                    return (
                        <form className="form" onSubmit={(ev) => {
                            ev.preventDefault()
                            handleSubmit(values)
                        }} noValidate>
                            <label className="form-group">
                                <span className="form-group__title">Имя</span>
                                <Field
                                    type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="username"
                                    className={`form-group__input ${errors.username && touched.username && 'form-group__input--invalid'}`}
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Имя"
                                    disabled={isSubmitting}
                                />
                                {errors.username && touched.username ? <div className="form__error"><ErrorMessage name='username' className="form__error" /></div> : null}
                            </label>
                            <label className="form-group">
                                <span className="form-group__title">Электронная почта</span>
                                <Field
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    className={`form-group__input ${errors.email && touched.email && 'form-group__input--invalid'}`}
                                    required
                                    placeholder="Электронная почта"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    disabled={isSubmitting}
                                />
                                {errors.email && touched.email ? <div className="form__error"><ErrorMessage name='email' className="form__error" /></div> : null}
                            </label>
                            <label className="form-group">
                                <span className="form-group__title">Пароль</span>
                                <Field
                                    type="password"
                                    name="password"
                                    className={`form-group__input ${errors.password && 'form-group__input--invalid'}`}
                                    required
                                    placeholder="Пароль"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    disabled={isSubmitting}
                                />
                                {errors.password && touched.password ? <div className="form__error"><ErrorMessage name='password' className="form__error" /></div> : null}
                            </label>
                            <label className="form-group">
                                <span className="form-group__title">Подтвердить пароль</span>
                                <Field
                                    type="password"
                                    name="confirmPassword"
                                    className={`form-group__input ${errors.confirmPassword && touched.confirmPassword && 'form-group__input--invalid'}`}
                                    required
                                    placeholder="Подтвердить пароль"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    disabled={isSubmitting}
                                />
                                {errors.confirmPassword && touched.confirmPassword ? <div className="form__error"><ErrorMessage name='confirmPassword' /></div> : null}
                            </label>
                            {webError ? <div className="form__error">{webError}</div> : null}
                            <button className="form__button" disabled={isSubmitting} type="submit">Зарегистрироваться</button>
                        </form>
                    )
                }}
            </Formik>
        )
    )
}

export default SignUpForm