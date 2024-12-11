import { useState } from "react"
import {
  Form,
  InputContainer,
  Label,
  StyledInput,
  StyledButton,
  CheckBoxContainer,
  CheckNote,
} from "./LoginForm.styled"
import { useField } from "../../hooks"

const LoginForm = ({ onSubmit }) => {
  const [keepSignedIn, setKeepSignedIn] = useState(false)
  const email = useField("email")
  const password = useField("password")

  const handleCheckboxChange = (event) => {
    setKeepSignedIn(event.target.checked)
  }

  const handleLogin = (event) => {
    event.preventDefault()

    const credentials = {
      email: email.value,
      password: password.value,
    }

    onSubmit(credentials)
  }

  return (
    <Form onSubmit={handleLogin}>
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
    </Form>
  )
}

export default LoginForm
