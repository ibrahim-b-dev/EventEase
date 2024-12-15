import styled from "styled-components"

export const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
`

export const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`

export const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.white};
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