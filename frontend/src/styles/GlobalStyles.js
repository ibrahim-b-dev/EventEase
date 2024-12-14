import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.typography.fonts.body};
    /* font-family: ${({ theme }) => theme.fonts.body}; */
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      color: ${({ theme }) => theme.colors.primaryHover};
    }
  }

  button {
    cursor: pointer;
    font-family: ${({ theme }) => theme.typography.body};
    /* font-family: ${({ theme }) => theme.fonts.body}; */
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    border-radius: 4px;
    padding: 8px 16px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyles
