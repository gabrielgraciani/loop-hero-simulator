import { useEffect, useCallback } from 'react';

import { useHero } from '../../hooks/useHero';
import { KeyCodes } from '../../enum/KeyCodes';

import { Container } from './styles';

export function Hero(): JSX.Element {
  const {
    isBlocked,
    isAttacking,
    positionHorizontal,
    positionVertical,
    moveUp,
    moveRight,
    moveLeft,
    moveDown,
    handleAttack,
    direction,
    isDead,
  } = useHero();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.code) {
        case KeyCodes.ARROW_UP:
        case KeyCodes.KEY_W: {
          moveUp();
          break;
        }

        case KeyCodes.ARROW_DOWN:
        case KeyCodes.KEY_S: {
          moveDown();
          break;
        }

        case KeyCodes.ARROW_LEFT:
        case KeyCodes.KEY_A: {
          moveLeft();
          break;
        }

        case KeyCodes.ARROW_RIGHT:
        case KeyCodes.KEY_D: {
          moveRight();
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
    [handleAttack, moveDown, moveLeft, moveRight, moveUp],
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
    <Container
      isAttacking={isAttacking}
      direction={direction}
      horizontalPosition={positionHorizontal}
      vericalPosition={positionVertical}
      isDead={isDead}
    />
  );
}
