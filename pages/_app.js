import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globals';
import theme from '../styles/theme';
import { Outer } from '../components/containers';

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Outer>
        <Component {...pageProps} />;
      </Outer>
    </ThemeProvider>
  )
};

export default MyApp;
