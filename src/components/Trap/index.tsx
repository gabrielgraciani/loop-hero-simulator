import React from 'react';

import { ITrapProps } from './types';
import { Container } from './styles';

export const Trap = ({ initialPosition }: ITrapProps): JSX.Element => {
  return (
    <Container
      data-testid={`Trap-y=${initialPosition.y}-x=${initialPosition.x}`}
      x={initialPosition.x}
      y={initialPosition.y}
    />
  );
};
