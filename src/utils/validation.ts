export const isValidEmail = (email: string) => {
    const regex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
    return regex.test(email)
}

export const isValidUsername = (username: string) => {
    const regex = new RegExp(/^[a-zA-Z]+$/)
    return regex.test(username)
}

export const isValidPassword = (password: string) => {
    return password.length > 8 && password.length < 28
}

export const validateData = (value: string, isValid: (payload: string) => boolean) => {
    if(!value) {
        return 'Обязательно заполнить'
    }
    if(!isValid(value)) {
        return 'Не соответствует шаблону'
    }
    return ''
}