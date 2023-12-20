/* eslint-disable @next/next/no-head-element */
import type { Metadata } from 'next';
import Layout from 'src/components/common/Layout';
import { genDefaultMetadata } from 'src/libs/genMetadata';
import EmotionStyleRegistry from 'src/libs/registry/EmotionRegistry';
import ReactQueryProvider from 'src/libs/registry/ReactQueryRegistry';

export const metadata: Metadata = genDefaultMetadata({ title: '홈' });
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="preload"
          as="style"
          href="https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.1/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.1/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <EmotionStyleRegistry>
          <ReactQueryProvider>
            <Layout>{children}</Layout>
          </ReactQueryProvider>
        </EmotionStyleRegistry>
      </body>
    </html>
  );
}
