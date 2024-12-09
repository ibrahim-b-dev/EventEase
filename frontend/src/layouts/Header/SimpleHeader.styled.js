import styled from "styled-components"
import { Database } from "lucide-react"

export const Container = styled.header`
  background-color: rgba(249, 252, 247, 0.9);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 600px) {
    padding: 1rem;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Logo = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
`

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0.5rem 0;
`

export const DatabaseIcon = styled(Database)``