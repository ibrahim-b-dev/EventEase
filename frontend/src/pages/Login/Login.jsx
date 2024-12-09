import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../../reducers/authReducer"
import { useField } from "../../hooks"
import {
  Container,
  Title,
  InputContainer,
  Label,
  StyledInput,
  StyledButton,
  CheckBoxContainer,
  CheckNote,
  InfoContainer,
  Link,
} from "./Login.styled"

const Login = () => {
  const dispatch = useDispatch()

  const email = useField("email")
  const password = useField("password")
  const [keepSignedIn, setKeepSignedIn] = useState(false)

  const handleCheckboxChange = (event) => {
    setKeepSignedIn(event.target.checked)
  }

  const handleLogin = (event) => {
    event.preventDefault()
    const credentials = {
      email: email.value,
      password: password.value
    }

    dispatch(login(credentials))
  }

  return (
    <Container>
      <Title>Log in to EventEase</Title>
      <form onSubmit={handleLogin}>
        <InputContainer>
          <Label>Email</Label>
          <StyledInput
            placeholder="Enter your email"
            placeholdercolor="#17cc17"
            color="#000"
            bgcolor="#E8F3E5"
            minLength="6"
            maxLength="25"
            {...email}
          />
        </InputContainer>

        <InputContainer>
          <Label>Password</Label>
          <StyledInput
            placeholder="Enter your password"
            placeholdercolor="#17cc17"
            bgcolor="#E8F3E5"
            {...password}
            minLength="6"
          />
        </InputContainer>

        <CheckBoxContainer>
          <input
            type="checkbox"
            checked={keepSignedIn}
            onChange={handleCheckboxChange}
          />
          <CheckNote>Keep me signed in</CheckNote>
        </CheckBoxContainer>

        <StyledButton label="Log in" />
      </form>

      <InfoContainer>
        <Link href="#">Forget your username or password?</Link>
        <Link href="#">New to EventEase? Sign up now.</Link>
      </InfoContainer>
    </Container>
  )
}

export default Login
