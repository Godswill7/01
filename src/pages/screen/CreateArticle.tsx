import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import pix from "../../assets/Me.jpg"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerAuthor } from '../../Api/AuthApi'
import { useNavigate } from "react-router-dom"
import { createArticle } from '../../Api/ArticleApi'
import { useSelector } from "react-redux"


const CreateArticle = () => {
    const navigate = useNavigate()
    const userID = useSelector((state: any) => state.appUser)
    const [image, setImage] = useState(pix)
    const [avatar, setAvatar] = useState('')

    const schema = yup.object({
        title: yup.string().required(),
        description: yup.string().required(),
        content: yup.string().required(),
    })

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onHandleImage = (e: any) => {
        try {
            const file = e.target.files[0]
            const realImage = URL.createObjectURL(file)
            setImage(realImage)
            setAvatar(file)

        } catch (error) {
            console.log(error)
        }
    }

    const onHandleSubmit = handleSubmit(async (data: any) => {
        const { title, description, content } = data
        const formData = new FormData()

        formData.append("name", title)
        formData.append("email", description)
        formData.append("password", content)
        formData.append("image", avatar)

        createArticle(formData, userID).then(() => {
            navigate("/")
        })

    })


    return (

        <Container>
            <Main onSubmit={onHandleSubmit} >
                <Title>Post an Article</Title>
                <ImageHolder>
                    <Image src={image} />
                    <ImageInput id="pix" type="file" onChange={onHandleImage} />
                    <ImageLabel htmlFor='pix' >Upload Image</ImageLabel>
                </ImageHolder>

                <InputHolder>
                    <InputTitle>Title</InputTitle>
                    <Input
                        placeholder='Title'
                        {...register("title")}
                    />
                </InputHolder>
                {errors.title && <Error>Error</Error>}

                <InputHolder>
                    <InputTitle>Description</InputTitle>
                    <Input
                        placeholder='Description'
                        {...register("description")}
                    />
                </InputHolder>
                {errors.description && <Error>Error</Error>}

                <InputHolderArea>
                    <InputTitle>Content</InputTitle>
                    <InputArea
                        placeholder='Content'
                        {...register("content")}
                    />
                </InputHolderArea>
                {errors.content && <Error>Error</Error>}


                <Button type="submit" >Publish</Button>

            </Main>
        </Container>

    )
}

export default CreateArticle

const Title = styled.div`
margin-bottom: 20px;
font-weight: 600;
`

const LineText = styled.div`
text-transform: uppercase;
font-size: 10px;
margin: 0 6px;
width: 100%;
text-align: center;
line-height:1.2;
`

const Line = styled.div`
width: 100%;
border-bottom: 1px solid;
border-color: var(--appBorder);
`

const Holder = styled.div`
display: flex;
width: 90%;
align-items: center;
margin-bottom: 20px;
`

const Button2 = styled(Link)`
width: 90%;
background-color: var(--appAuth);
color: var(--appBG);
height: 43px;
display: flex;
align-items:center;
justify-content: center;
margin: 10px 0;
border-radius: var(--appRadiusSmall);
text-decoration: none;
`

const Button = styled.button`
width: 90%;
background-color: var(--appMainColor);
color: var(--appBG);
height: 43px;
display: flex;
align-items:center;
justify-content: center;
margin: 10px 0;
border-radius: var(--appRadiusSmall);
font-size: 15px;
font-family: Poppins;
outline: none;
border:0;
`

const Error = styled.div`
font-size: 10px;
color: #53012e;
font-weight: bold;
text-align: right;
width:90%;
margin-bottom: 7px;
`

const InputArea = styled.textarea`
background-color: var(--appBG);
border: 0;
outline: none;
width: 95%;
height: 95%;
padding-left: 10px;
resize: none;
margin-top: 5px;
`

const Input = styled.input`
background-color: var(--appBG);
border: 0;
outline: none;
width: 95%;
height: 95%;
padding-left: 10px;
`

const InputTitle = styled.div`
background-color: var(--appBG);
margin: 0 10px;
position: absolute;
top:-10px;
left: 0;
font-size: 12px;
`

const InputHolder = styled.div`
display: flex;
flex-direction: column;
position: relative;
width: 90%;
height: 40px;
border: 1px solid var(--appBorderL);
border-radius: var(--appRadiusSmall);
margin: 10px 0;


`

const InputHolderArea = styled.div`
display: flex;
flex-direction: column;
position: relative;
width: 90%;
height: 120px;
border: 1px solid var(--appBorderL);
border-radius: var(--appRadiusSmall);
margin: 10px 0;


`

const ImageLabel = styled.label`
padding: 8px 15px;
border-radius: var(--appRadiusSmall);
background-color: var(--appText);
color: var(--appBG);
font-size: 12px;
margin-top: 4px;
cursor: pointer;
`

const Image = styled.img`
width: 250px;
height:150px;
border-radius: var(--appRadiusSmall);
object-fit: cover;
margin: 5px 0;
`

const ImageInput = styled.input`
display:none
`

const ImageHolder = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px 

`

const Main = styled.form`
width: 500px;
min-height: 400px;
border: 1px solid var(--appBorder);
border-radius: var(--appRadiusSmall);
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 0;
`

const Container = styled.div`
width: 100%;
height: 100vh;
color: var(--appText);
display:flex;
justify-content: center;
align-items: center;

`