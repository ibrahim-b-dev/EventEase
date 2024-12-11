import {
  Form,
  InputContainer,
  Label,
  StyledInput,
  StyledButton,
  Select,
} from "./SignupForm.styled"
import { useField } from "../../hooks"

const SignupForm = ({ onSubmit }) => {
  const name = useField("text")
  const email = useField("email")
  const phone = useField("tel")
  const password = useField("password")

  const handleSignup = (event) => {
    event.preventDefault()

    const userData = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      password: password.value,
    }

    onSubmit(userData)
  }

  return (
    <Form onSubmit={handleSignup}>
      <InputContainer>
        <Label>Name</Label>
        <StyledInput
          placeholder="Enter your name"
          placeholdercolor="#17cc17"
          color="#000"
          bgcolor="#E8F3E5"
          minLength="6"
          maxLength="25"
          {...name}
          required
        />
      </InputContainer>

      <InputContainer>
        <Label>Email</Label>
        <StyledInput
          placeholder="Enter your phone email"
          placeholdercolor="#17cc17"
          color="#000"
          bgcolor="#E8F3E5"
          {...email}
          required
        />
      </InputContainer>

      <InputContainer>
        <Label>Phone</Label>
        <StyledInput
          placeholder="Enter your phone number (optional)"
          placeholdercolor="#17cc17"
          color="#000"
          bgcolor="#E8F3E5"
          {...phone}
        />
      </InputContainer>

      <InputContainer>
        <Label>Role</Label>
        <Select required>
          <option value="">Select Role</option>
          <option value="organizer">Organizer</option>
          <option value="attendee">User</option>
        </Select>
      </InputContainer>

      <InputContainer>
        <Label>Password</Label>
        <StyledInput
          placeholder="Enter your password"
          placeholdercolor="#17cc17"
          color="#000"
          bgcolor="#E8F3E5"
          minLength="6"
          maxLength="25"
          {...password}
          required
        />
      </InputContainer>

      <StyledButton label="Signup" />
    </Form>
  )
}

export default SignupForm
