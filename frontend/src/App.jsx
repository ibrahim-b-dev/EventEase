import { Route, Routes } from "react-router-dom"
import styled from "styled-components"

import LandingPage from "./pages/LandingPage"
import AppPage from "./pages/AppPage"

const Container = styled.div`
  width: 100%;
  max-width: 900px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #f9fcf7;
`

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app/*" element={<AppPage />} />
      </Routes>
    </Container>
  )
}

export default App
