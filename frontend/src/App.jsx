import { Route, Routes } from "react-router-dom"

import LandingPage from "./pages/LandingPage"
import AppPage from "./pages/AppPage"
import TopLevelNotification from "./components/TopLevelNotification"
import { Container } from "./styles/styled"

const App = () => {
  return (
    <Container>
      <TopLevelNotification />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app/*" element={<AppPage />} />
      </Routes>
    </Container>
  )
}

export default App
