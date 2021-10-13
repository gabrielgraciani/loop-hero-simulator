type IDirections = 'DOWN' | 'UP' | 'LEFT' | 'RIGHT';

interface IStyledHeroProps {
  isAttacking: boolean;
  direction: IDirections;
  horizontalPosition: number;
  vericalPosition: number;
  size: number;
}

export { IStyledHeroProps, IDirections };
