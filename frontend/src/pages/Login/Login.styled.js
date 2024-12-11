import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 5em;
  
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1em;

  @media (min-width: 400px) {
    font-size: 2rem;
  }
`

export const InfoContainer = styled.div`
  margin: 0.8em 0;
  align-self: center;

  @media (min-width: 400px) {
    align-self: baseline;
  }
`

export const Link = styled.a`
  display: block;
  text-decoration: underline;
  font-size: 0.8em;
  color: #17cc17;
`
