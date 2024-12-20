import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useNotifications } from "reapop"

import LoginForm from "../../components/forms/LoginForm"
import { login } from "../../reducers/authReducer"
import { Container, Title, InfoContainer, Link } from "./Login.styled"
import BackButton from "../../components/BackButton"

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { notify } = useNotifications()
  const { isLoggedIn, user, error } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isLoggedIn) {
      notify({
        title: "Login Successful",
        message: `Welcome, ${user.name}!`,
        status: "success",
        dismissAfter: 1000,
      })

      navigate("/dashboard")
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
      <BackButton />
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
