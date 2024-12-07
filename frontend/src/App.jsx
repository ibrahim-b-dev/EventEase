import styled from "styled-components"
import Header from "./layouts/Header"
import SideBar from "./layouts/Sidebar"
import Main from "./layouts/Main"

const Container = styled.div`
  width: 100%;
  max-width: 900px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #f9fcf7;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9fcf7;
  margin-top: 5em;

  & > * {
    padding: 0.6em;
  }

  @media (min-width: 600px) {
    flex-direction: row;
  }
`

const App = () => {
  return (
    <Container>
      <Header />

      <Wrapper>
        <SideBar />
        <Main />
      </Wrapper>
    </Container>
  )
}

export default App
