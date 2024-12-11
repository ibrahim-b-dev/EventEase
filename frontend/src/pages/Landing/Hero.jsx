import { Search } from "lucide-react"

import {
  Main,
  Background,
  HeroWrapper,
  Title,
  Subtitle,
  SearchContainer,
  StyledInput,
  StyledButton,
} from "./Hero.styled"

const Hero = () => {
  return (
    <Main>
      <Background />
      <HeroWrapper>
        <Title>Discover events you love</Title>
        <Subtitle>
          Explore events from music festivals to marathons, and sign up for
          events you're interested in
        </Subtitle>

        <SearchContainer>
          <StyledInput placeholder="Serach for events" Icon={Search} />
          <StyledButton label="Find an event" />
        </SearchContainer>
      </HeroWrapper>
    </Main>
  )
}

export default Hero
