import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useNotifications } from "reapop"

import {
  Container,
  Title,
  InfoContainer,
  Link,
  Label,
} from "./PasswordRecovery.styled"
import PasswordRecoveryForm from "../../components/forms/PasswordRecoveryForm"
import BackButton from "../../components/BackButton"

const PasswordRecovery = () => {
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

  const handleRecovery = () => {
    console.log("recovery")
    // dispatch(reset()) ... TODO
  }

  return (
    <Container>
      <BackButton  />
      <Title>Reset Your Password</Title>
      <Label>Enter your email to receive a password reset link</Label>
      <PasswordRecoveryForm onSubmit={handleRecovery} />

      <InfoContainer>
        <Link href="/login">Remember your password? Log In</Link>
      </InfoContainer>
    </Container>
  )
}

export default PasswordRecovery
