import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from 'react';

import { EDirections } from '../enum/Directions';
import { EMapFloor } from '../enum/MapFloor';
import { EWalker } from '../enum/Walker';

import { IPosition } from '../interfaces/Position';

import { handleNextPosition, isValidMovement } from '../utils/helper';
import { useMap } from './MapContext';

interface IUpdateMapProps {
  direction: EDirections;
  currentPosition: IPosition;
  walker: EWalker;
}

interface IUpdateMapResponse {
  nextPosition: IPosition;
  nextMovementIsValid: boolean;
}

interface IUpdatedMapContextProps {
  updatedMap: number[][];
  updateMap: ({
    direction,
    currentPosition,
    walker,
  }: IUpdateMapProps) => IUpdateMapResponse;
}

interface IUpdatedMapProviderProps {
  children: ReactNode;
}
const UpdatedMapContext = createContext<IUpdatedMapContextProps>(
  {} as IUpdatedMapContextProps,
);

const UpdatedMapProvider = ({
  children,
}: IUpdatedMapProviderProps): JSX.Element => {
  const { map } = useMap();
  const [updatedMap, setUpdatedMap] = useState<number[][]>(map);

  function updateMap({
    direction,
    currentPosition,
    walker,
  }: IUpdateMapProps): IUpdateMapResponse {
    const nextPosition = handleNextPosition({
      direction,
      currentPosition,
    });
    const nextMovementIsValid = isValidMovement({
      map: updatedMap,
      nextPosition,
      walker,
    });

    if (nextMovementIsValid) {
      setUpdatedMap(oldMap => {
        const newMapState = [...oldMap];

        const currentValue = newMapState[currentPosition.y][currentPosition.x];

        newMapState[currentPosition.y][currentPosition.x] = EMapFloor.FLOOR;
        newMapState[nextPosition.y][nextPosition.x] = currentValue;

        return newMapState;
      });
    }

    return {
      nextPosition,
      nextMovementIsValid,
    };
  }

  useEffect(() => {
    setUpdatedMap(map);
  }, [map]);

  return (
    <UpdatedMapContext.Provider value={{ updatedMap, updateMap }}>
      {children}
    </UpdatedMapContext.Provider>
  );
};

function useUpdatedMap(): IUpdatedMapContextProps {
  const context = useContext(UpdatedMapContext);

  if (!context) {
    throw new Error('useUpdatedMap must be used within an UpdatedMapProvider');
  }

  return context;
}

export { UpdatedMapProvider, useUpdatedMap };
