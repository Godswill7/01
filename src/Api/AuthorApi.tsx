import axios from "axios"

const url: string = 'http://localhost:7777/api/v1'

export const viewAuthor = async () => {
    try {
        return await axios.get(`${url}/get-authors`).then((res: any) => {
            return res.data.data
        })

    } catch (error) {
        console.log(error)
    }
} 