import SimpleHeader from "../../layouts/Header/SimpleHeader"
import Hero from "./Hero"
import PopularEvents from "../../pages/Landing/PopularEvents"
import Features from "./Features"
import Cta from "./Cta"
import styled from "styled-components"
import { SubHeading } from "../../styles/styled"

const Footer = styled.footer`
  padding: 20px 0;
  margin-top: 40px;
  display: flex;
  justify-content: center;
`

const LandingPage = () => {
  return (
    <>
      <SimpleHeader />
      <Hero />
      <PopularEvents />
      <Features />
      <Cta />
      <Footer>
        <SubHeading>&copy; 2024 EventEase. All rights reserved.</SubHeading>
      </Footer>
    </>
  )
}

export default LandingPage
