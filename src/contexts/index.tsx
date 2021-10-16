import { ReactNode } from 'react';

import { MapProvider } from './MapContext';

interface IAppProvider {
  children: ReactNode;
}

const AppProvider = ({ children }: IAppProvider): JSX.Element => (
  <MapProvider>{children}</MapProvider>
);

export default AppProvider;
