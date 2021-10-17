import { EMapFloor } from '../../../enum/MapFloor';

export interface ITileProps {
  position: { x: number; y: number };
  value: number;
}

export interface IStyledTileProps {
  x: number;
  y: number;
  value: EMapFloor;
}
