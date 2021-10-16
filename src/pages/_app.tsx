import type { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/global';

import AppProvider from '../contexts';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </AppProvider>
  );
}
export default MyApp;
