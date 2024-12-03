import styled from "styled-components"
import Header from "../components/Header"
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
    <>
      <Header />
      <Container>
        <Hero />
        <PopularEvents />
        <Features />
        <CTA />
      </Container>
    </>
  )
}

export default LandingPage
