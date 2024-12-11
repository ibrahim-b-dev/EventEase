import Button from "../../components/Button"
import { Container, Title, Wrapper } from "./Cta.styled"

const Cta = () => {
  return (
    <Container>
      <Title>Ready to find your next event?</Title>
      <Wrapper>
        <Button label="Sign up" />
        <Button label="Log in" bgcolor="#EAF5E5" />
      </Wrapper>
    </Container>
  )
}

export default Cta
