

export const signin = async (data: string) => {
    try {
        const response = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data
        })
        return response.json()
    } catch(error) {
        return error
    }
}

export const signup = async (data: string) => {
    try {
        const response = await fetch('https://reqres.in/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data
        })
        return response.json()
    } catch(error) {
        return error
    }
}

export const getUsers = async (countUsers: number) => {
    try {
        const response = await fetch(`https://reqres.in/api/users?per_page=${countUsers}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response.json()
    } catch(error) {
        return `Возникла ошибка: ${error}`
    }
}