import { NavLink } from 'react-router-dom'
import styled  from 'styled-components'
import { useDispatch } from "react-redux"
import { logOut } from '../../global/GlobalState'

const Header = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <Container>
                <Main>
                    <Logo> Logo</Logo>


                    <Nav to="/" >
                        <span>Home</span>
                    </Nav>
                    <Nav to="/view-authors" >
                        <span>View Authors</span>
                    </Nav>
                    <Nav to="/create-article" >
                        <span>Create Articles</span>
                    </Nav>

                    <Space />

                    <NavLog
                        onClick={() => {
                            dispatch(logOut())
                        }}
                    >
                        <span>Log Out</span>
                    </NavLog>



                </Main>
            </Container>
        </div>
    )
}

export default Header

const Space = styled.div`
flex: 1;
`
const Nav = styled(NavLink)`
width: 100%;
display: flex;
justify-content: center;
cursor: pointer;
text-decoration: none;
span{
    width: 96%;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: var(--appText);
    color: var(--appBG);
    height: 40px;
    margin: 5px 0;
}

.active{
    background-color: var(--appBG)
}
`

const NavLog = styled.div`
width: 100%;
display: flex;
justify-content: center;
cursor: pointer;
span{
    width: 96%;
    display:flex;
    justify-content: center;
    align-items: center;
background-color: var(--appRed);
color: var(--appBG);
height: 40px;
margin: 5px 0;
}
`

const Logo = styled.div`
text-align: center;
margin-top: 30px;
margin-bottom: 30px;
font-weight: 900;
font-size: 60px
`

const Main = styled.div`
display: flex;
height: 100%;
flex-direction: column;
`

const Container = styled.div`
width: 200px;
height: 100vh;
border-right: 1px solid var(--appBorder);
margin-right: 10px;
position: fixed;
`