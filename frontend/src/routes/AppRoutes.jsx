import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useSelector } from "react-redux"

import PublicLayout from "../layouts/PublicLayout"
import LandingPage from "../pages/Landing/LandingPage"
import SignUp from "../pages/SignUp/SignUp"
import Login from "../pages/Login/Login"
import PasswordRecovery from "../pages/Recovery/PasswordRecovery"

const AppRoutes = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth)
  const userRole = user?.role

  console.log(isLoggedIn, user)

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="password-recovery" element={<PasswordRecovery />} />
          {/* <Route path="events" element={<EventListings />} /> */}
          {/* <Route path="events/:id" element={<EventDetails />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes
