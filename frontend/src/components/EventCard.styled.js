import styled from "styled-components"

export const Card = styled.div`
  flex: 1 46%;
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borders.radius.md};
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-5px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex: 1 32%;
  }
`

export const Background = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: ${({ bgImg }) => `url(${bgImg})`} no-repeat top left;
  background-size: cover;
  border-radius: ${({ theme }) => theme.borders.radius.md};
`

export const Name = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
`

export const Description = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.light};
  color: ${({ theme }) => theme.colors.primary};
`
