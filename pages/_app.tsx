import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';
import 'antd/dist/reset.css';
import 'github-markdown-css/github-markdown.css';
import GlobalStyle from '../styles/GlobalStyle';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import getQueryClient from 'modules/query/queryClient';
import MetaHead from 'components/common/MetaHead';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => getQueryClient);
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedQuery}>
        <ThemeProvider theme={theme.light}>
          <ReactQueryDevtools initialIsOpen={true} />
          <MetaHead.Default />
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
