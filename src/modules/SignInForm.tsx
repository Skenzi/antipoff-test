import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";
import { isValidEmail, isValidPassword, validateData } from '../utils/validation';
import { Form, Field, ErrorMessage, Formik, FormikHelpers, FormikValues } from "formik";
import { signin } from "../utils/api";
import { setToken } from "../utils/authorize";

interface FormValuesProps {
    email: string,
    password: string,
}

const initialValues: FormValuesProps = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [webError, setWebError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (values: FormikValues, { setSubmitting }: FormikHelpers<FormikValues>) => {
        setSubmitting(true)
        setWebError('')
        const valuesJson = JSON.stringify(values)
        const response = signin(valuesJson);
        response.then((data) => {
            if (data.error) throw data.error
            setToken(data.token)
            navigate('/')
        }).catch((error) => {
            setWebError(error)
        }).finally(() => setSubmitting(false))
    }

    return (
        (
            <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validate={(values) => {
                setWebError('')
                    const errors: FormValuesProps = {
                        email: '',
                        password: '',
                    }

                    errors.email = validateData(values.email, isValidEmail)
                    errors.password = validateData(values.password, isValidPassword)

                    if(errors.email || errors.password) return errors

                    return {}
            }}
            >
                {({ errors, values, touched, isSubmitting, handleBlur, handleChange}) => {
                    return (
                        <Form className="form">
                            <label className="form-group">
                                <span className="form-group__title">Электронная почта</span>
                                <Field
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    className={`form-group__input ${errors.email && touched.email && 'form-group__input--invalid'}`}
                                    required
                                    placeholder="Электронная почта"
                                    value={values.email}
                                    onChange={handleChange}
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
                                />
                                {errors.password && touched.password ? <div className="form__error"><ErrorMessage name='password' className="form__error" /></div> : null}
                            </label>
                            {webError ? <div className="form__error">{webError}</div> : null}
                            <button className="form__button" disabled={isSubmitting} type="submit">Войти</button>
                        </Form>
                    )
                }}
            </Formik>
        )
    )
}

export default SignInForm