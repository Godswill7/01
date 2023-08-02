import styled  from 'styled-components'
import { useTanAuthor } from '../../hooks/useAuthor'
import { beFriend } from '../../Api/FriendApi'
import { useSelector } from 'react-redux'


const ViewAuthor = () => {
    const { authors, isLoading } = useTanAuthor()
    const userID = useSelector((state: any) => state.appUser)
    return (
        <div>
            {
                isLoading ? <div>loading....</div> : <Container>
                    <Main>
                        {
                            authors?.map((props: any) => (
                                <div>
                                    {
                                        userID === props._id ? null : <Card key={props._id} >
                                            <div>
                                                <CardHolder>
                                                    <Avatar src={props.avatar} />
                                                    <Content>
                                                        <Name>{props.name}</Name>
                                                        <Email>{props.email}</Email>
                                                        <Total>{props.articles.length}</Total>
                                                    </Content>
                                                </CardHolder>

                                                <Holder>
                                                    <Button
                                                        onClick={() => {
                                                            beFriend(userID, props._id)
                                                        }}
                                                    >Add as Friend</Button>
                                                </Holder>

                                            </div>
                                        </Card>
                                    }
                                </div>
                            ))
                        }
                    </Main>
                </Container>
            }
        </div>
    )
}

export default ViewAuthor

const Holder = styled.div`
display:flex;
align-items: center;
justify-content: center;
width: 100%;
`

const Button = styled.div`
text-align: center;
width: 90%;
height: 40px;
margin-top: 10px;
background-color: var(--appMainColor);
color: var(--appBG);
display:flex;
align-items: center;
justify-content: center;
margin-bottom:10px;
border-radius: var();
`

const Total = styled.div`
font-size: 12px;
font-weight: 600;
`

const Email = styled.div`
font-size: 12px;
word-wrap: break-word;
width: 100px
`

const Name = styled.div`
font-size: 20px;
font-weight: 700;

`

const Content = styled.div``

const Avatar = styled.img`
width: 120px;
height: 80px;
border-radius: var(--appRadiusSmall);
border: 1px solid var(--appBorder);
margin-right: 10px;
object-fit: cover;
`

const CardHolder = styled.div`
margin: 5px;
display:flex;
align-items: center;
`

const Card = styled.div`
border-radius: var(--appRadiusSmall);
border: 1px solid var(--appBorderL);
width: 250px;
height: 150px; 
margin: 5px;
`;

const Main = styled.div`
display:flex;
justify-content: center;
flex-wrap: wrap;
width: 100%;
height: 100%;
`

const Container = styled.div`
width: 100%;
min-height:40vh;

`