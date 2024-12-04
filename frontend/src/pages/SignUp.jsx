import { useState } from "react"
import styled from "styled-components"
import Input from "../components/Input"
import Button from "../components/Button"

const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  margin-top: 5em;
`

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.8em;
`

const InputContainer = styled.div`
  width: 50%;
  margin-bottom: 0.8em;
`

const Label = styled.h4`
  font-size: 0.8rem;
  font-weight: 600;
`

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
`

const InfoContainer = styled.div`
  margin: 0.8em 0;
`

const Link = styled.a`
  display: block;
  text-decoration: underline;
  font-size: 0.8em;
  color: #17cc17;
`

const CheckNote = styled.span`
  font-size: 0.8em;
  margin: 5px;
`

const SignUp = () => {
  const [checked, setChecked] = useState(false)

  const handleCheck = (event) => {
    setChecked(event.target.checked)
  }

  return (
    <Container>
      <Title>Log in to EventEase</Title>
      <InputContainer>
        <Label>Username</Label>
        <Input
          placeholder="Enter your username"
          placeholdercolor="#17cc17"
          color="#000"
          bgcolor="#E8F3E5"
        />
      </InputContainer>

      <InputContainer>
        <Label>Password</Label>
        <Input
          placeholder="Enter your password"
          placeholdercolor="#17cc17"
          bgcolor="#E8F3E5"
        />
      </InputContainer>

      <CheckBoxContainer>
        <input type="checkbox" checked={checked} onChange={handleCheck} />
        <CheckNote>Keep me signed in</CheckNote>
      </CheckBoxContainer>

      <Button label="Log in" width="50%" />

      <InfoContainer>
        <Link>Forget your username or password?</Link>
        <Link>New to EventEase? Sign up now.</Link>
      </InfoContainer>
    </Container>
  )
}

export default SignUp
