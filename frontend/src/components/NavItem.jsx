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
  background-color: inherit;
  /* transition: background-color 0.3s ease; */
  cursor: pointer;

  width: 100%;
  color: "#0D1C0D";
  /* background-color: ${(props) => (props.bgcolor ? props.bgcolor : "transparent")}; */

  &:hover {
    /* background-color: #17cc17; */
  }
`

const NavItem = ({ label, Icon, onClick, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {Icon ? <Icon /> : <span>{label}</span>}
    </StyledButton>
  )
}

export default NavItem