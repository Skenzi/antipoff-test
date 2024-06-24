import { SERVER_URL, URL_PREFIX } from './consts'

export const signin = (data: string) => {

        const url = SERVER_URL + URL_PREFIX + 'login'
        const response = fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data
        })
        return response.then((data) => {
            if(data.status >= 400) throw {error: 'Not found user'}
            return data.json()
        }).catch((error) => {
            return error
        })

}

export const registerUser = async (data: string) => {
    try {
        const url = SERVER_URL + URL_PREFIX + 'register'
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data
        })
        return response.json()
    } catch(error) {
        throw new Error(error)
    }
}

export const getUsers = async (countUsers: number) => {
    try {
        const url = SERVER_URL + URL_PREFIX + 'users?per_page=' + countUsers
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response.json()
    } catch(error) {
        throw new Error(error)
    }
}

export const getUser = async (id: string) => {
    try {
        const url = SERVER_URL + URL_PREFIX + 'users/' + id
        const user = {
            "id": 1,
            "email": "george.bluth@reqres.in",
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://reqres.in/img/faces/1-image.jpg",
            "likedUsers": "[1,3,5]"
        }
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response.json()
    } catch(error) {
        return new Error(error)
    }
}

export const updateAvatar = async (id: number, file: File) => {
    try {
        const url = SERVER_URL + URL_PREFIX + 'user/' + id
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                "Content-Type": file.type,
            },
            body: file
        })
    } catch(error) {
        throw new Error(error)
    }
}