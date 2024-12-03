import styled from "styled-components"

const InputContainer = styled.div`
  border: 1px solid #a0a1a5;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: #a0a1a5;
`

const StyledInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-size: 1rem;
  color: inherit;
  margin-left: 0.5rem;
`

const Input = ({ type = "text", placeholder, Icon, onChange, ...props }) => {
  return (
    <InputContainer>
      {Icon && <Icon />}
      <StyledInput
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </InputContainer>
  )
}

export default Input