import axios from "axios";

const URL: string = "http://localhost:7777api/v1"

export const createArticle = async (data: any, userID: string) => {
    try {
        const config: {} = {
            'content-type': "multipart/form-data"
        }

        return await axios.post(`${URL}/${userID}/create-article`, data,config).then((res: any) => {return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}
