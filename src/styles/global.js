import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: color 0.2s;
  }

  a:hover {
    color: ${props => props.theme.colors.secondary};
    text-decoration: underline;
  }



  input, textarea, select {
    background-color: ${props => props.theme.colors.cardBackground};
    color: ${props => props.theme.colors.text};
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 4px;
    padding: 0.5rem;
  }
`;

export default GlobalStyle;