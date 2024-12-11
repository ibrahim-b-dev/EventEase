import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import PublicLayout from "../layouts/PublicLayout"
import LandingPage from "../pages/Landing/LandingPage"

const AppRoutes = () => {
  const isAuthenticated = true // Replace with your auth state logic
  const userRole = "organizer" // Example roles: organizer, attendee, admin

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="signup" element={<SignUp />} />
          {/* <Route path="login" element={<Login />} /> */}
          {/* <Route path="password-recovery" element={<PasswordRecovery />} /> */}
          {/* <Route path="events" element={<EventListings />} /> */}
          {/* <Route path="events/:id" element={<EventDetails />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes
