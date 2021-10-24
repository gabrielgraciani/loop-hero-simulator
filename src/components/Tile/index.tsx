import { memo } from 'react';

import { Container } from './styles';
import { ITileProps } from './types';

export const Tile = memo(({ floor, className }: ITileProps) => {
  return <Container data-testid="Tile" floor={floor} className={className} />;
});
