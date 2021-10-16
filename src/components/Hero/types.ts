import { IDirections } from '../../interfaces/Directions';

export interface IHeroProps {
  initialPosition: { x: number; y: number };
}

export interface IStyledHeroProps {
  isAttacking: boolean;
  direction: IDirections;
  horizontalPosition: number;
  vericalPosition: number;
  isDead: boolean;
}

export interface IStyledLifeProps {
  life: number;
}
