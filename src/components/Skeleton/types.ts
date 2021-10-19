import { IPosition } from '../../interfaces/Position';
import { IDirections } from '../../interfaces/Directions';

export interface ISkeletonProps {
  initialPosition: IPosition;
}

export interface IStyledSkeletonProps {
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
