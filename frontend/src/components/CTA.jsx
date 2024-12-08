import styled from "styled-components"
import Button from "./Button"

const Container = styled.div`
  padding: 5em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h2`
  font-size: 1rem;
  font-weight: 700;

  @media (min-width: 400px) {
    font-size: 1.5rem;
    margin-bottom: 0.5em;
  }

  @media (min-width: 600px) {
    margin-bottom: 0.5em;
    font-size: 2rem;
  }
`
const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 1.5em;
`

const CTA = () => {
  return (
    <Container>
      <Title>Ready to find your next event?</Title>
      <Wrapper>
        <Button label="Sign up"/>
        <Button label="Log in" bgcolor="#EAF5E5"/>
      </Wrapper>
    </Container>
  )
}

export default CTA