import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 1rem;
  /* background-color: "#f9fcf7"; */
  background-color: ${props => props.theme.colors.background};
`

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;

  ${(props) =>
    props.variant === "primary"
      ? `
    background: ${props.theme.colors.primary};
    color: ${props.theme.colors.white};
    border: none;
    
    &:hover {
      background: ${props.theme.colors.primaryHover};
    }
  `
      : `
    background: transparent;
    color: ${props.theme.colors.text};
    border: 1px solid ${props.theme.colors.border};
    
    &:hover {
      background: ${props.theme.colors.background};
    }
  `}
`

export const Card = styled.div`
  background: ${(props) => props.theme.colors.white};
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

export const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

export const Section = styled.section`
  padding: 4rem 0;
`

export const Heading = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`

export const SubHeading = styled.p`
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.textMuted};
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem auto;
`
