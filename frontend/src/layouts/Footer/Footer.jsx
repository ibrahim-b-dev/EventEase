import styled from "styled-components"
import { SubHeading } from "../../styles/styled"

export const StyledFooter = styled.footer`
  padding: 20px 0;
  margin-top: 40px;
  display: flex;
  justify-content: center;
`

const Footer = () => {
  return (
    <StyledFooter>
      <SubHeading>&copy; 2024 EventEase. All rights reserved.</SubHeading>
    </StyledFooter>
  )
}

export default Footer
