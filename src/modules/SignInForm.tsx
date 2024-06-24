import { ChangeEventHandler, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";
import { isValidEmail, isValidPassword, isValidUsername, validateData } from '../utils/validation';
import { Formik, Form, Field, FormikProps, withFormik, FormikErrors } from "formik";
import { signin } from "../utils/api";
import { setToken } from "../utils/authorize";

interface FormValuesProps {
    email: string,
    password: string,
}

const innerForm = (props: FormikProps<FormValuesProps>) => {
    const [webError, setWebError] = useState('')
    const navigate = useNavigate()

    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = props

    const _handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        setWebError('')
        const valuesJson = JSON.stringify(values)
        const response = signin(valuesJson);
        response.then((data) => {
            if(data.error) throw data.error
            setToken(data.token)
            navigate('/')
        }).catch((error) => {
            setWebError(error)
        })
    }

    return (
        (
            <Form className="form" onSubmit={_handleSubmit}>
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
                    {errors.email && touched.email ? <div className="form__error">{errors.email}</div> : null}
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
                    {errors.password && touched.password ? <div className="form__error">{errors.password}</div> : null}
                </label>
                {webError ? <div className="form__error">{webError}</div> : null}
                <button className="form__button" disabled={isSubmitting} type="submit">Войти</button>
            </Form>
        )
    )
}

interface FormProps {
    email?: string,
    password?: string,
}

const SignInForm = withFormik<FormProps, FormValuesProps>({
    mapPropsToValues: props => {
        return {
            email: '',
            password: '',
        }
    },
    validate: (values: FormValuesProps) => {
        const errors: FormikErrors<FormValuesProps> = {}

        errors.email = validateData(values.email, isValidEmail)
        errors.password = validateData(values.password, isValidPassword)
        return errors
    },
    handleSubmit: (values, { setSubmitting }) => {
        
    }
})(innerForm)

export default SignInForm