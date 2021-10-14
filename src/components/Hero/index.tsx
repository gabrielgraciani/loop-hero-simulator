import { useEffect } from 'react';

import { useHero } from '../../hooks/useHero';
import { KeyCodes } from '../../enum/KeyCodes';

import { Container } from './styles';

export function Hero(): JSX.Element {
  const hero = useHero();
  const size = 84;

  function handleKeyDown(event: KeyboardEvent) {
    switch (event.code) {
      case KeyCodes.ARROW_UP:
      case KeyCodes.KEY_W: {
        hero.moveUp();
        break;
      }

      case KeyCodes.ARROW_DOWN:
      case KeyCodes.KEY_S: {
        hero.moveDown();
        break;
      }

      case KeyCodes.ARROW_LEFT:
      case KeyCodes.KEY_A: {
        hero.moveLeft();
        break;
      }

      case KeyCodes.ARROW_RIGHT:
      case KeyCodes.KEY_D: {
        hero.moveRight();
        break;
      }

      case KeyCodes.SPACE: {
        hero.handleAttack();
      }

      default: {
        break;
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Container
      isAttacking={hero.isAttacking}
      direction={hero.direction}
      size={size}
      horizontalPosition={hero.positionHorizontal}
      vericalPosition={hero.positionVertical}
    />
    );
}
