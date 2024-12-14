import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"
import { NotificationsProvider } from "reapop"

import { Container } from "./styles/styled"
import TopLevelNotification from "./components/TopLevelNotification"
import AppRoutes from "./routes/AppRoutes"
import store from "./store"
import theme from "./styles/theme"
import GlobalStyles from "./styles/GlobalStyles"

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

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
