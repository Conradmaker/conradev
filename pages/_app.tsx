import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';
import 'antd/dist/reset.css';
import 'github-markdown-css/github-markdown.css';
import GlobalStyle from '../styles/GlobalStyle';
import { QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import getQueryClient from 'modules/query/queryClient';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => getQueryClient);
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme.light}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
