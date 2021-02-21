import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globals';
import theme from '../styles/theme';
import { Outer } from '../components/containers';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="/static/icon.ico" />
      </Head>
      <GlobalStyle />
      <Outer>
        <Component {...pageProps} />
      </Outer>
    </ThemeProvider>
  )
};

export default MyApp;
