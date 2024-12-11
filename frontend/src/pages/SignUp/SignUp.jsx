import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useNotifications } from "reapop"

import SignupForm from "../../components/forms/SignupForm"
import { register } from "../../reducers/authReducer"
import {
  Container,
  Title,
  InfoContainer,
  Link,
  Label
} from "./SignUp.styled"

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { notify } = useNotifications()
  const { isLoggedIn, user, error } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isLoggedIn) {
      notify({
        title: "Register Successful",
        message: `Welcome ${user.name}`,
        status: "success",
        dismissAfter: 1000,
      })

      navigate("/dashboard")
    }

    if (error) {
      notify({
        title: "Register Failed",
        message: error || "Unable to register. Please try again.",
        status: "error",
        dismissAfter: 1000,
      })
    }
  }, [isLoggedIn, error, dispatch])

  const handleSignup = (payload) => {
    dispatch(register(payload))
  }

  return (
    <Container>
      <Title>Create Your Account</Title>
      <Label>
        Join EventEase and start creating unforgettable events
      </Label>

      <SignupForm onSubmit={handleSignup} />

      <InfoContainer>
        <Link href="/login">Already have an account? Log In</Link>
      </InfoContainer>
    </Container>
  )
}

export default SignUp
