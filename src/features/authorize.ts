export const getToken = () => {
    return sessionStorage.getItem('token')
}

export const removeToken = () => {
    sessionStorage.removeItem('token')
}