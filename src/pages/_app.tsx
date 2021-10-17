import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { GlobalStyles } from '../styles/global';
import AppProvider from '../contexts';

import { store } from '../redux/store';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <AppProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </AppProvider>
    </Provider>
  );
}
export default MyApp;
