import styled from "styled-components"

import SimpleHeader from "../layouts/Header/SimpleHeader"
import Hero from "../components/Hero"
import PopularEvents from "../components/PopularEvents"
import Features from "../components/Features"
import CTA from "../components/CTA"

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

const LandingPage = () => {
  return (
    <Container>
      <SimpleHeader />
      <Hero />
      <PopularEvents />
      <Features />
      <CTA />
    </Container>
  )
}

export default LandingPage
