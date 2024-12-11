import styled from "styled-components"
import Button from "../Button"
import Input from "../Input"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
`

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 1em;

  @media (min-width: 400px) {
    max-width: 22em;
  }
`

export const Label = styled.h4`
  font-size: 0.8rem;
  font-weight: 600;
`

export const StyledButton = styled(Button)`
  width: 100%;

  @media (min-width: 400px) {
    max-width: 12em;
  }
`

export const StyledInput = styled(Input)``

export const Select = styled.select`
  padding: 0.75rem;
  width: 100%;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  background: #e8f3e5;
  color: #1AE51A;
`
