import styled from "styled-components"
import Input from "../../components/Input"
import Button from "../../components/Button"

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 8em;
  padding: 0 0.5em;

  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.8em;

  @media (min-width: 400px) {
    font-size: 2rem;
  }
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

export const InfoContainer = styled.div`
  margin: 0.8em 0;
  align-self: center;

  @media (min-width: 400px) {
    align-self: baseline;
  }
`

export const Link = styled.a`
  display: block;
  text-decoration: underline;
  font-size: 0.8em;
  color: #17cc17;
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
