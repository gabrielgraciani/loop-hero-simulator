import { useEnemy } from '../../hooks/useEnemy';

import { Container, LifeContainer } from './styles';
import { ISkeletonProps } from './types';

export function Skeleton({ initialPosition }: ISkeletonProps): JSX.Element {
  const { isAttacking, x, y, direction, isDead, life, isAfterDeathAnimation } =
    useEnemy({
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
        isAfterDeathAnimation={isAfterDeathAnimation}
      >
        <LifeContainer life={life}>{life}%</LifeContainer>
      </Container>
    </>
  );
}
