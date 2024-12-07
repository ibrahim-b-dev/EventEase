import styled from "styled-components"

import Hero from "../components/Hero"
import PopularEvents from "../components/PopularEvents"
import Features from "../components/Features"
import CTA from "../components/CTA"
import SimpleHeader from "../layouts/SimpleHeader"

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
