import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.colors.background};
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default GlobalStyle;
