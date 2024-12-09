import { Route, Routes } from "react-router-dom"
import Login from "./Login/Login"

const AppPage = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        {/* <Route path="profile" element={<Profile />} /> */}
      </Routes>
    </>
  )
}

export default AppPage
