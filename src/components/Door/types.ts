import { IPosition } from '../../interfaces/Position';

export interface IDoorProps {
  initialPosition: IPosition;
}

export interface IStyledDoorProps {
  x: number;
  y: number;
  isOpen: boolean;
}
