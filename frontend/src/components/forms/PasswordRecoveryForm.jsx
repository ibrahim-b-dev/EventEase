import {
  Form,
  InputContainer,
  Label,
  StyledInput,
  StyledButton,
} from "./PasswordRecoveryForm.styled"
import { useField } from "../../hooks"

const PasswordRecoveryForm = ({ onSubmit }) => {
  const email = useField("email")

  const handleRecovery = (event) => {
    event.preventDefault()

    onSubmit(email.value)
  }

  return (
    <Form onSubmit={handleRecovery}>
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
      <StyledButton label="Reset" />
    </Form>
  )
}

export default PasswordRecoveryForm
