import { IPosition } from '../../interfaces/Position';
import { IDirections } from '../../interfaces/Directions';

export interface IHeroProps {
  initialPosition: IPosition;
}

export interface IStyledHeroProps {
  isAttacking: boolean;
  direction: IDirections;
  x: number;
  y: number;
  isDead: boolean;
}

export interface IStyledLifeProps {
  life: number;
}
