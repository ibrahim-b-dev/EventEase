import styled from "styled-components"

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  padding: 1em 1.2em;
  border-radius: 12px;
  border: none;
  transition: background-color 0.3s ease;
  cursor: pointer;

  color: ${(props) => (props.color ? props.color : "#0D1C0D")};
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#1AE51A")};

  &:hover {
    background-color: #17cc17;
  }
`

const Button = ({ label, Icon, onClick, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {Icon ? <Icon /> : <span>{label}</span>}
    </StyledButton>
  )
}

export default Button
