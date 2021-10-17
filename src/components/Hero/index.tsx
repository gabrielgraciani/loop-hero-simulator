import { useEffect, useCallback } from 'react';

import { useHero } from '../../hooks/useHero';
import { KeyCodes } from '../../enum/KeyCodes';

import { Container, LifeContainer } from './styles';
import { IHeroProps } from './types';
import { EDirections } from '../../enum/Directions';
import { EWalker } from '../../enum/Walker';

export function Hero({ initialPosition }: IHeroProps): JSX.Element {
  const {
    isBlocked,
    isAttacking,
    x,
    y,
    handleAttack,
    direction,
    isDead,
    life,
    handleMove,
  } = useHero({ initialPosition });

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.code) {
        case KeyCodes.ARROW_UP:
        case KeyCodes.KEY_W: {
          handleMove(EDirections.UP, EWalker.HERO);
          break;
        }

        case KeyCodes.ARROW_DOWN:
        case KeyCodes.KEY_S: {
          handleMove(EDirections.DOWN, EWalker.HERO);
          break;
        }

        case KeyCodes.ARROW_LEFT:
        case KeyCodes.KEY_A: {
          handleMove(EDirections.LEFT, EWalker.HERO);

          break;
        }

        case KeyCodes.ARROW_RIGHT:
        case KeyCodes.KEY_D: {
          handleMove(EDirections.RIGHT, EWalker.HERO);

          break;
        }

        case KeyCodes.SPACE: {
          handleAttack();
          break;
        }

        default: {
          break;
        }
      }
    },
    [handleAttack, handleMove],
  );

  useEffect(() => {
    if (!isBlocked) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, isBlocked]);

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
