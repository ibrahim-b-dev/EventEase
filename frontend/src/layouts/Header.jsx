import { Bell, Database, Search } from "lucide-react"
import styled from "styled-components"
import Button from "./Button"

const Container = styled.header`
  background-color: "#F5FCF6";
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem 2rem;
  border-bottom: 1px solid #E3E9E8;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Logo = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
`

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin: 0.5rem 0;
`

const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`

const Header = () => {
  return (
    <Container>
      <LogoWrapper>
        <Database size="1.1rem" />
        <Logo>EventEase</Logo>
      </LogoWrapper>
      <InfoWrapper>
        <Button label="Create Event" />
        <Button Icon={Search} bgcolor="#E8F2E8" />
        <Button Icon={Bell} bgcolor="#E8F2E8" />
        <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" />
      </InfoWrapper>
    </Container>
  )
}

export default Header
