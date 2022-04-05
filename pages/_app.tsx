import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { queryClient } from '@lib/react-query/setup';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../src/theme';
import Page from '../src/components/page-layout';
import createEmotionCache from '../src/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Comics</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Page>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </Page>
      </ThemeProvider>{' '}
    </CacheProvider>
  );
}

export default MyApp;
