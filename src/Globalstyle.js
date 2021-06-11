import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    /* background: ${({ theme }) => theme.body}; */
    color: ${({ theme }) => theme.text};
    transition: color .8s ease-in-out;
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;

  }

  a{
    text-decoration: none;
  }
  
  `