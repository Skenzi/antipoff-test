

const SignIn = () => {
    const submitHandler = () => {

    }
    return (
        <section className="form-wrapper">
            <h2 className="form-title">Авторизация</h2>
            <form onSubmit={submitHandler}>
                <label className="form-group">
                    <span className="form-group__title">Электронная почта</span>
                    <input className="form-group__input" placeholder="Электронная почта" />
                </label>
                <label className="form-group">
                    <span className="form-group__title">Пароль</span>
                    <input className="form-group__input" placeholder="Пароль" />
                </label>
                <button className="form__button" type="submit">Войти</button>
            </form>
        </section>
    )
}

export default SignIn;