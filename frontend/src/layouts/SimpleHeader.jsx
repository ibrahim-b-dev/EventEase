import styled from "styled-components"
import { Database } from "lucide-react"
import Button from "../components/Button"

const Container = styled.header`
  background-color: rgba(249, 252, 247, 0.9);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 600px) {
    padding: 1rem;
  }
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
  gap: 10px;
  margin: 0.5rem 0;
`

const SimpleHeader = () => {
  return (
    <Container>
      <LogoWrapper>
        <Database size="1.1rem" />
        <Logo>EventEase</Logo>
      </LogoWrapper>
      <InfoWrapper>
        <Button label="Sign Up" />
      </InfoWrapper>
    </Container>
  )
}

export default SimpleHeader