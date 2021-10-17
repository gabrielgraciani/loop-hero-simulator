import { useSlime } from '../../hooks/useSlime';

import { Container, LifeContainer } from './styles';
import { ISlimeProps } from './types';

export function Slime({ initialPosition }: ISlimeProps): JSX.Element {
  const { isAttacking, x, y, direction, isDead, life } = useSlime({
    initialPosition,
  });

  return (
    <>
      <Container
        isAttacking={isAttacking}
        direction={direction}
        x={x}
        y={y}
        isDead={isDead}
      >
        <LifeContainer life={life}>{life}%</LifeContainer>
      </Container>
    </>
  );
}
