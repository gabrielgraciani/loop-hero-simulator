import { EMapFloor } from '../../../enum/MapFloor';

import { IPosition } from '../../../interfaces/Position';

export interface ITileProps {
  position: IPosition;
  value: number;
}

export interface IStyledTileProps {
  x: number;
  y: number;
  value: EMapFloor;
}
