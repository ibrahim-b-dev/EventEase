import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import Dashboard from "../pages/Dashboard"

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

const StyledMain = styled.section`
  flex: 1;

  @media (min-width: 600px) {
    flex: 4;
  }
`

const Main = () => {
  return (
    <Wrapper>
      <SideBar />
      <StyledMain>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </StyledMain>
    </Wrapper>
  )
}

export default Main
