type IDirections = 'DOWN' | 'UP' | 'LEFT' | 'RIGHT';

interface IStyledHeroProps {
  isAttacking: boolean;
  direction: IDirections;
}

export { IStyledHeroProps, IDirections };
