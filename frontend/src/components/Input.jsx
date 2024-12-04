import styled from "styled-components"

const InputContainer = styled.div`
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  border-color: ${({ bordercolor }) => (bordercolor ? bordercolor : "#a0a1a5")};
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: ${({ color }) => (color ? color : "#a0a1a5")};
  background-color: ${({ bgcolor }) => bgcolor || "transparent"};
`

const StyledInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-size: 1rem;
  color: inherit;
  margin-left: 0.5rem;

  &::placeholder {
    color: ${(props) => props.placeholdercolor || "#a0a1a5"};
  }
`

const Input = ({ type = "text", placeholder, Icon, onChange, ...props }) => {
  return (
    <InputContainer {...props}>
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
