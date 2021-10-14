import { IDirections } from '../../interfaces/Directions';

interface IStyledHeroProps {
  isAttacking: boolean;
  direction: IDirections;
  horizontalPosition: number;
  vericalPosition: number;
  size: number;
}

export { IStyledHeroProps };
