import styled from "styled-components"

export const Container = styled.div`
  padding: 5em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 700;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 1.5rem;
    margin-bottom: 0.5em;
  }
  
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-bottom: 0.5em;
    font-size: 2rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1.5em;
`
