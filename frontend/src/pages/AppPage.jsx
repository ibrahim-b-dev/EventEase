import { Route, Routes } from "react-router-dom"
import Login from "./Login/Login"
import Dashboard from "./Dashboard"

const AppPage = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default AppPage
