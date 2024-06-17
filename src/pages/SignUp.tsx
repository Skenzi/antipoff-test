

const SignUp = () => {
    const submitHandler = () => {

    }
    return (
        <section className="form-wrapper">
            <h2 className="form-title">Регистрация</h2>
            <form className="form" onSubmit={submitHandler}>
                <label className="form-group">
                    <span className="form-group__title">Имя</span>
                    <input className="form-group__input" placeholder="Имя" />
                </label>
                <label className="form-group">
                    <span className="form-group__title">Электронная почта</span>
                    <input className="form-group__input" placeholder="Электронная почта" type="email" />
                </label>
                <label className="form-group">
                    <span className="form-group__title">Пароль</span>
                    <input className="form-group__input"  placeholder="Пароль" type="password" />
                </label>
                <label className="form-group">
                    <span className="form-group__title">Подтвердить пароль</span>
                    <input className="form-group__input" placeholder="Подтвердить пароль" type="password" />
                </label>
                <button className="form__button" type="submit">Зарегистрироваться</button>
            </form>
        </section>
    )
}

export default SignUp