

const SignUp = () => {
    const submitHandler = () => {

    }
    return (
        <section className="">
            <h2>Регистрация</h2>
            <form onSubmit={submitHandler}>
                <label>
                    <span>Имя</span>
                    <input />
                </label>
                <label>
                    <span>Электронная почта</span>
                    <input />
                </label>
                <label>
                    <span>Пароль</span>
                    <input />
                </label>
                <label>
                    <span>Подтвердить пароль</span>
                    <input />
                </label>
                <button type="submit">Зарегистрироваться</button>
            </form>
        </section>
    )
}

export default SignUp