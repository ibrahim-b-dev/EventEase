import styled from "styled-components"
import Input from "../components/Input"
import Button from "../components/Button"
import { Search } from "lucide-react"

import eventBackground from "../assets/event-background.jpeg"

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  margin: 1.5rem 0;
  /* padding: 1.5rem; */
  height: 480px;

  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  align-items: center;
  border-radius: 0 0 12px 12px;

  @media (min-width: 400px) {
    padding: 1.5rem;
  }
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${eventBackground}) no-repeat top left;
  background-size: 100% 100%;
  z-index: 0;
  display: hidden;
`

const Hero = styled.div`
  margin-bottom: 1rem;
  /* padding: 1.5rem; */
  padding: 1.5rem 0.5rem;
  position: relative;
  z-index: 2;
  @media (min-width: 400px) {
    /* padding: 5rem 0; */
  }
`

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 900;
  line-height: 60px;
  z-index: 2;
  color: #000080;

  @media (min-width: 400px) {
    font-size: 2rem;
  }

  @media (min-width: 600px) {
    font-size: 3.2rem;
  }
`
const Subtitle = styled.h2`
  margin-bottom: 15px;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 24px;
  z-index: 1;
  color: #000080;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 10px;
  padding: 0.8em;
  background-color: #fff;
  border-radius: 12px;
  width: 100%;
  max-width: 30rem;
  border: 1px solid blue;

  @media (min-width: 400px) {
    flex-direction: row;
  }
`

const StyledInput = styled(Input)`
  flex: 1;

  @media (min-width: 400px) {
    min-width: 160px;
    flex-grow: 3;
    /* flex: 3 1 160px; */
  }
`

const StyledButton = styled(Button)`
  flex: 1;

  @media (min-width: 400px) {
    min-width: 70px;
    flex-grow: 2;
    /* flex: 2 1 70px; */
  }
`

const Main = () => {
  return (
    <HeroContainer>
      <Background />
      <Hero>
        <Title>Discover events you love</Title>
        <Subtitle>
          Explore events from music festivals to marathons, and sign up for
          events you're interested in
        </Subtitle>

        <InputContainer>
          <StyledInput placeholder="serach for events" Icon={Search} />
          <StyledButton label="Find an event" />
        </InputContainer>
      </Hero>
    </HeroContainer>
  )
}

export default Main
