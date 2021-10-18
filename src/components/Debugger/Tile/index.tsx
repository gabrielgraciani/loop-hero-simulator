import { memo } from 'react';

import { Container } from './styles';
import { ITileProps } from './types';

export const Tile = memo(({ position, value }: ITileProps) => {
  return (
    <Container x={position.x} y={position.y} value={value}>
      {value}
    </Container>
  );
});
