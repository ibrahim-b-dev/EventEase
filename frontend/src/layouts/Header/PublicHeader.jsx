import { useLocation, useNavigate } from "react-router-dom"
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
  const location = useLocation()

  const isOnRoute = location.pathname === "/"
  const isOnLoginPage = location.pathname === "/login"
  const isOnSignupPage = location.pathname === "/signup"

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
        {isOnLoginPage ? (
          <Button label="Signup" onClick={handleClickSignup} />
        ) : isOnSignupPage ? (
          <Button label="Login" onClick={handleClickLogin} />
        ) : (
          <>
            <Button label="Login" onClick={handleClickLogin} />
            <Button label="Signup" onClick={handleClickSignup} />
          </>
        )}
      </InfoWrapper>
    </Header>
  )
}

export default PublicHeader
