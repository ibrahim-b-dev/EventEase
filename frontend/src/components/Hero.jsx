import styled from "styled-components"
import Input from "../components/Input"
import Button from "../components/Button"
import { Search } from "lucide-react"

import eventBackground from "../assets/event-background.jpeg"

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  margin: 1.5rem 0;
  height: 480px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 12px;
`

const Background = styled.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${eventBackground}) no-repeat top left;
  background-size: 100% 100%;
  z-index: -1;
`

const TitleContainer = styled.div`
  margin-bottom: 1rem;
  padding-right: 10px;
`

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 900;
  line-height: 60px;
  z-index: 1;
  color: #000080;
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
  gap: 10px;
  padding: 0.8em;
  background-color: #fff;
  border-radius: 12px;
  max-width: 27.5rem;

`
const StyledInput = styled(Input)`
  /* border: 1px solid red; */
`

const Main = () => {
  return (
    <HeroContainer>
      <Background />
      <TitleContainer>
        <Title>Discover events you love</Title>
        <Subtitle>
          Explore events from music festivals to marathons, and sign up for
          events you're interested in
        </Subtitle>

        <InputContainer>
          <StyledInput placeholder="serach for events" Icon={Search} />
          <Button label="Find an event" />
        </InputContainer>
      </TitleContainer>
    </HeroContainer>
  )
}

export default Main
