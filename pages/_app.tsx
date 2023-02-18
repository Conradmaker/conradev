import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';
import 'github-markdown-css/github-markdown.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme.light}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
