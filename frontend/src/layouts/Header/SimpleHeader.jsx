import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import {
  Header,
  LogoWrapper,
  DatabaseIcon,
  Logo,
  InfoWrapper,
} from "./SimpleHeader.styled"

const SimpleHeader = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/app/login")
  }

  return (
    <Header>
      <LogoWrapper>
        <DatabaseIcon size="1.1rem" />
        <Logo>EventEase</Logo>
      </LogoWrapper>
      <InfoWrapper>
        <Button label="Login" onClick={handleClick} />
      </InfoWrapper>
    </Header>
  )
}

export default SimpleHeader
