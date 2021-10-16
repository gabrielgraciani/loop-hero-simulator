import React from 'react';

import { ITrapProps } from './types';
import { Container } from './styles';

export const Trap = ({ initialPosition }: ITrapProps): JSX.Element => {
  return <Container x={initialPosition.x} y={initialPosition.y} />;
};
