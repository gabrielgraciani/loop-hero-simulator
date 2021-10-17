import { ReactNode } from 'react';

import { MapProvider } from './MapContext';
import { UpdatedMapProvider } from './UpdatedMapContext';

interface IAppProvider {
  children: ReactNode;
}

const AppProvider = ({ children }: IAppProvider): JSX.Element => (
  <MapProvider>
    <UpdatedMapProvider>{children}</UpdatedMapProvider>
  </MapProvider>
);

export default AppProvider;
