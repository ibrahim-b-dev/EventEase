import styled from "styled-components"

export const Container = styled.section`
  padding: 1rem;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
  gap: 0.6rem;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
  }
`

export const Card = styled.div`
  flex: 1 100%;
  padding: 0.8em;
  border: 1px solid #e9f0e9;
  border-radius: 12px;
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
  max-width: 300px;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 400px) {
    flex: 1 46%;
  }

  @media (min-width: 600px) {
    flex: 1 30%;
  }
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

export const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  font-weight: 700;
  margin-bottom: 3rem;
`
