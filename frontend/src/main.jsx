import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { NotificationsProvider } from "reapop"
import { BrowserRouter as Router } from "react-router-dom"

import App from "./App.jsx"
import store from "./store.js"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <NotificationsProvider>
        <Router>
          <App />
        </Router>
      </NotificationsProvider>
    </Provider>
  </StrictMode>
)
