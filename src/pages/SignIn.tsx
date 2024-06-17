

const SignIn = () => {
    const submitHandler = () => {

    }
    return (
        <section className="">
            <h2>Регистрация</h2>
            <form onSubmit={submitHandler}>
                <label>
                    <span>Электронная почта</span>
                    <input />
                </label>
                <label>
                    <span>Пароль</span>
                    <input />
                </label>
                <button type="submit">Войти</button>
            </form>
        </section>
    )
}

export default SignIn;