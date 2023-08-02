import axios from "axios"

const url: string = 'http://localhost:7777/api/v1'

export const registerAuthor = async (data: any) => {
    try {
        const config: {} = {
            "content-type": "multipart/form-data"
        }
        return await axios.post(`${url}/register-authors`, data, config).then((res: any) => {

            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const signinAuthor = async (data: any) => {
    try {
        return await axios.post(`${url}/signin-authors`, data).then((res: any) => {
            console.log(res)
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const getOneAuthor = async (userID: string) => {
    try {
        return await axios.get(`${url}/${userID}/get-one-author`).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const getAllAuthor = async () => {
    try {
        return await axios.get(`${url}/get-authors`).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}