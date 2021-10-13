import { useEffect, useState } from 'react';

import { Container } from './styles';
import { IDirections } from './types';

export function Hero(): JSX.Element {
  const [isAttacking, setIsAttacking] = useState(false);
  const [direction, setDirection] = useState<IDirections>('DOWN');

  function checkKey(key: string) {
    switch (key) {
      case 'ArrowUp':
      case 'w': {
        setDirection('UP');
        break;
      }

      case 'ArrowDown':
      case 's': {
        setDirection('DOWN');
        break;
      }

      case 'ArrowLeft':
      case 'a': {
        setDirection('LEFT');
        break;
      }

      case 'ArrowRight':
      case 'd': {
        setDirection('RIGHT');
        break;
      }

      case ' ': {
        setIsAttacking(true);
      }

      default: {
        break;
      }
    }
  }

  function handlePressDown(event: KeyboardEvent) {
    console.log(event)
    checkKey(event.key);
  }
  useEffect(() => {
    window.addEventListener('keydown', handlePressDown);
    return () => {
      window.removeEventListener('keydown', handlePressDown);
    };
  }, []);

  useEffect(() => {
    if(isAttacking) {
      setTimeout(() => {
        setIsAttacking(false);
      }, 1000)
    }
  }, [isAttacking])

  return <Container isAttacking={isAttacking} direction={direction} />;
}
