import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import {
  Container,
  LogoWrapper,
  DatabaseIcon,
  Logo,
  InfoWrapper,
} from "./SimpleHeader.styled"

const SimpleHeader = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    console.log("login")
    navigate("/app/login")
  }

  return (
    <Container>
      <LogoWrapper>
        <DatabaseIcon size="1.1rem" />
        <Logo>EventEase</Logo>
      </LogoWrapper>
      <InfoWrapper>
        <Button label="Login" onClick={handleClick} />
      </InfoWrapper>
    </Container>
  )
}

export default SimpleHeader
