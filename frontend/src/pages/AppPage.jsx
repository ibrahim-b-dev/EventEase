import React from "react"
import { Route, Routes } from "react-router-dom"

const AppPage = () => {
  return (
    <>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        {/* <Route path="profile" element={<Profile />} /> */}
      </Routes>
    </>
  )
}

export default AppPage
