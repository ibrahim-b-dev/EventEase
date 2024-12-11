import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useNotifications } from "reapop"

import LoginForm from "../../components/forms/LoginForm"
import { login } from "../../reducers/authReducer"
import { useField } from "../../hooks"
import { Container, Title, InfoContainer, Link } from "./Login.styled"

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { notify } = useNotifications()
  const { isLoggedIn, error } = useSelector((state) => state.auth)

  const email = useField("email")
  const password = useField("password")

  useEffect(() => {
    if (isLoggedIn) {
      notify({
        title: "Login Successful",
        message: `Welcome, ${email.value}!`,
        status: "success",
        dismissAfter: 1000,
      })

      navigate("/app/dashboard")
    }

    if (error) {
      notify({
        title: "Login Failed",
        message: error || "Unable to log in. Please try again.",
        status: "error",
        dismissAfter: 1000,
      })
    }
  }, [isLoggedIn, error, dispatch])

  const handleLogin = (credentials) => {
    dispatch(login(credentials))
  }

  return (
    <Container>
      <Title>Log in to EventEase</Title>
      <LoginForm onSubmit={handleLogin} />

      <InfoContainer>
        <Link href="/password-recovery">Forget your username or password?</Link>
        <Link href="/signup">New to EventEase? Sign up now. </Link>
      </InfoContainer>
    </Container>
  )
}

export default Login
