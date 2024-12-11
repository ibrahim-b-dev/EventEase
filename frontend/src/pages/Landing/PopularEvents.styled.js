import styled from "styled-components"
import eventBackground from "../../assets/hero3.webp"

export const EventsContainer = styled.section`
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    align-items: flex-start;
  }
`

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5em;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 2rem;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em 0;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const Card = styled.div`
  padding: 2%;
  flex: 1 46%;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    flex: 1 32%;
  }
`

export const Background = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: url(${eventBackground}) no-repeat top left;
  background-size: cover;
  border-radius: 0.75rem;
`

export const Name = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
`

export const Description = styled.div`
  font-size: 0.8rem;
  font-weight: 300;
  color: #4f964f;
`
