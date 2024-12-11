import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import AuthenticatedLayout from "./layouts/AuthenticatedLayout"
import PublicLayout from "./layouts/PublicLayout"
import {
  LandingPage,
  Login,
  SignUp,
  PasswordRecovery,
  EventListings,
  EventDetails,
  OrganizerDashboard,
  CreateEvent,
  ManageEvent,
  EventReports,
  AttendeeDashboard,
  ProfileSettings,
  AdminDashboard,
  UserManagement,
  SystemReports,
  NotificationsCenter,
  HelpCenter,
  NotFound,
  ServerError,
} from "./pages" // Import all page components

const AppRoutes = () => {
  const isAuthenticated = true // Replace with your auth state logic
  const userRole = "organizer" // Example roles: organizer, attendee, admin

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="password-recovery" element={<PasswordRecovery />} />
          <Route path="events" element={<EventListings />} />
          <Route path="events/:id" element={<EventDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Authenticated Routes */}
        {isAuthenticated && (
          <Route path="/" element={<AuthenticatedLayout />}>
            {/* Shared Authenticated Routes */}
            <Route path="notifications" element={<NotificationsCenter />} />
            <Route path="profile" element={<ProfileSettings />} />
            <Route path="help" element={<HelpCenter />} />

            {/* Role-Specific Routes */}
            {userRole === "organizer" && (
              <>
                <Route path="dashboard" element={<OrganizerDashboard />} />
                <Route path="events/create" element={<CreateEvent />} />
                <Route path="events/manage/:id" element={<ManageEvent />} />
                <Route path="reports" element={<EventReports />} />
              </>
            )}

            {userRole === "attendee" && (
              <Route path="dashboard" element={<AttendeeDashboard />} />
            )}

            {userRole === "admin" && (
              <>
                <Route path="admin/dashboard" element={<AdminDashboard />} />
                <Route path="admin/users" element={<UserManagement />} />
                <Route path="admin/reports" element={<SystemReports />} />
              </>
            )}
          </Route>
        )}

        {/* Error Pages */}
        <Route path="/404" element={<NotFound />} />
        <Route path="/500" element={<ServerError />} />

        {/* Redirect unauthenticated users */}
        {!isAuthenticated && (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
