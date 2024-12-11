import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import {
  Header,
  LogoWrapper,
  DatabaseIcon,
  Logo,
  InfoWrapper,
} from "./PublicHeader.styled"

const PublicHeader = () => {
  const navigate = useNavigate()

  const handleClickLogin = () => {
    navigate("/login")
  }

  const handleClickSignup = () => {
    navigate("/signup")
  }

  return (
    <Header>
      <LogoWrapper>
        <DatabaseIcon size="1.1rem" />
        <Logo>EventEase</Logo>
      </LogoWrapper>
      <InfoWrapper>
        <Button label="Login" onClick={handleClickLogin} />
        <Button label="Signup" onClick={handleClickSignup} />
      </InfoWrapper>
    </Header>
  )
}

export default PublicHeader
