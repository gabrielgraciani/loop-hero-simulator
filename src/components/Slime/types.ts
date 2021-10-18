import { IPosition } from '../../interfaces/Position';
import { IDirections } from '../../interfaces/Directions';

export interface ISlimeProps {
  initialPosition: IPosition;
}

export interface IStyledSlimeProps {
  isAttacking: boolean;
  direction: IDirections;
  x: number;
  y: number;
  isDead: boolean;
  isAfterDeathAnimation: boolean;
}

export interface IStyledLifeProps {
  life: number;
}
