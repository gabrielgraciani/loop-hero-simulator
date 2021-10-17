import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from 'react';

import { tileSize } from '../config/Constants';

import { useWindowSize } from '../hooks/useWindowSize';

import { generateInitialMap } from '../map/helper';

interface IMapContextProps {
  map: number[][];
}

interface IMapProviderProps {
  children: ReactNode;
}
const MapContext = createContext<IMapContextProps>({} as IMapContextProps);

const MapProvider = ({ children }: IMapProviderProps): JSX.Element => {
  const { width, height } = useWindowSize();
  const [map, setMap] = useState<number[][]>([]);

  useEffect(() => {
    const horizontalSquares = Math.floor((width || 0) / tileSize);
    const verticalSquares = Math.floor((height || 0) / tileSize);

    const generatedMap = generateInitialMap(verticalSquares, horizontalSquares);

    setMap(generatedMap);
  }, [width, height]);

  return <MapContext.Provider value={{ map }}>{children}</MapContext.Provider>;
};

function useMap(): IMapContextProps {
  const context = useContext(MapContext);

  if (!context) {
    throw new Error('useMap must be used within an MapProvider');
  }

  return context;
}

export { MapProvider, useMap };
