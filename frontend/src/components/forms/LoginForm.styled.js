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

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
`

export const CheckNote = styled.span`
  font-size: 0.8em;
  margin: 0.5em;
`

export const StyledButton = styled(Button)`
  width: 100%;

  @media (min-width: 400px) {
    max-width: 12em;
  }
`

export const StyledInput = styled(Input)``
