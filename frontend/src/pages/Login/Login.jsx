import { useState } from "react"
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
import { useField } from "../../hooks"

const Login = () => {
  const username = useField("text")
  const password = useField("password")
  const [keepSignedIn, setKeepSignedIn] = useState(false)


  const handleCheckboxChange = (event) => {
    setKeepSignedIn(event.target.checked)
  }

  const handleLogin = (event) => {
    event.preventDefault()
    console.log("Login")
  }

  return (
    <Container>
      <Title>Log in to EventEase</Title>
      <form onSubmit={handleLogin}>
        <InputContainer>
          <Label>Username</Label>
          <StyledInput
            placeholder="Enter your username"
            placeholdercolor="#17cc17"
            color="#000"
            bgcolor="#E8F3E5"
            {...username}
          />
        </InputContainer>

        <InputContainer>
          <Label>Password</Label>
          <StyledInput
            placeholder="Enter your password"
            placeholdercolor="#17cc17"
            bgcolor="#E8F3E5"
            {...password}
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
