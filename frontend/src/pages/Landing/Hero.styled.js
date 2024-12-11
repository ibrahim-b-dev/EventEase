import styled from "styled-components"
import Input from "../../components/Input"
import Button from "../../components/Button"

import eventBackground from "../../assets/event-background.jpeg"

export const Main = styled.main`
  position: relative;
  width: 100%;
  margin: 1.5rem 0;
  height: 32rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0 0 0.7rem 0.7rem;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    /* padding: 1rem; */
  }
`

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${eventBackground}) no-repeat top left;
  background-size: 100% 100%;
  z-index: 0;
`

export const HeroWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  padding: 1.5rem 0.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 5rem 0;
  }
`

export const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: 1000;
  line-height: 60px;
  text-align: center;
  color: #000080;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 2.5rem;
    text-align: left;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 3.2rem;
    margin-bottom: 2rem;
  }
`

export const Subtitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.1rem;
  text-align: center;
  font-weight: 300;
  line-height: 1.5rem;
  color: #000080;
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    text-align: left;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
  max-width: 30rem;
  padding: 0.8em;
  background-color: #fff;
  border-radius: 0.7rem;
  border: 1px solid blue;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: row;
  }
`

export const StyledInput = styled(Input)`
  flex: 1;
  color: #000080;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    min-width: 10rem;
  }
`

export const StyledButton = styled(Button)`
  flex: 1;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    min-width: 4.3rem;
  }
`
