import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    p {
      -webkit-font-smoothing: antialiased;
    }
  }
  h1,h2,h3,h4 {
    color: ${props => props.theme.colors.primary};
  }
`

export default GlobalStyle;
