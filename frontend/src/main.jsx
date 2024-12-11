import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { NotificationsProvider } from "reapop"
import { BrowserRouter as Router } from "react-router-dom"

import App from "./App.jsx"
import store from "./store.js"
import { ThemeProvider } from "styled-components"
import theme from "./styles/theme.js"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NotificationsProvider>
          <Router>
            <App />
          </Router>
        </NotificationsProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
)
