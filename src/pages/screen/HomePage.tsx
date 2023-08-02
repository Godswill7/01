import React from 'react'
import styled from 'styled-components'

const HomePage = () => {
    return (
        <div>
            <Container>
                <Main>
                    <Text>Home</Text>
                </Main>
            </Container>
        </div>
    )
}

export default HomePage

const Text = styled.div`
padding-left: 10px
`

const Main = styled.div`

`

const Container = styled.div`


`