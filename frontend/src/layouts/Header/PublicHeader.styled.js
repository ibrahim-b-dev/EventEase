import styled from "styled-components"
import { Database } from "lucide-react"

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`

export const Logo = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
`

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin: 0.5rem 0;
`

export const DatabaseIcon = styled(Database)``