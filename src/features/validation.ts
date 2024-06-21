export const isValidEmail = (email: string) => {
    if(email === '') return true
    const regex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
    return !!regex.test(email)
}

export const isValidUsername = (username: string) => {
    if(username === '') return true
    const regex = new RegExp(/^[a-zA-Z]+$/)
    return !!regex.test(username)
}

export const validateData = (value: string, cb: (payload: string) => boolean) => {
    if(value === '') {
        return 'Обязательно заполнить'
    }
    if(!cb(value)) {
        return 'Не соответствует шаблону'
    }
    return ''
}