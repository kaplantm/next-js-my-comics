import Head from 'next/head';
import { QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { queryClient } from '@lib/react-query/setup';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createCache from '@emotion/cache';
import theme from '../src/theme';
import Page from '../src/components/page-layout';

// Client-side cache, shared for the whole session of the user in the browser.

let muiCache: EmotionCache | undefined;

// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
export const createMuiCache = () => {
  muiCache = createCache({ key: 'mui', prepend: true });
  return muiCache;
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Comics</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8363507937716618"
          crossOrigin="anonymous"
        />
        <meta
          name="description"
          content="Tracking my DC Comics / Batfamily reading order and collecting favorite comic panels."
        />
      </Head>
      <CacheProvider value={muiCache ?? createMuiCache()}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Page>
            <QueryClientProvider client={queryClient}>
              <Component {...pageProps} />
            </QueryClientProvider>
          </Page>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
