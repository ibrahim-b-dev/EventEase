import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"
import { NotificationsProvider } from "reapop"

import { Container } from "./styles/styled"
import TopLevelNotification from "./components/TopLevelNotification"
import AppRoutes from "./routes/AppRoutes"
import theme from "./styles/theme"
import store from "./store"

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NotificationsProvider>
          <Container>
            <TopLevelNotification />

            <AppRoutes />
          </Container>
        </NotificationsProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
