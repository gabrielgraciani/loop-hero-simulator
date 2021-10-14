import { IDirections } from '../../interfaces/Directions';

export interface IStyledHeroProps {
  isAttacking: boolean;
  direction: IDirections;
  horizontalPosition: number;
  vericalPosition: number;
  isDead: boolean;
}
