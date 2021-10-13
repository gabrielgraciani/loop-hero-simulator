import { useEffect, useState } from 'react';

import { Container } from './styles';
import { IDirections } from './types';

export function Hero(): JSX.Element {
  const [isAttacking, setIsAttacking] = useState(false);
  const [direction, setDirection] = useState<IDirections>('DOWN');
  const [position, setPosition] = useState({x : 0, y: 0});

  const size = 84;

  function checkKey(key: string) {
    switch (key) {
      case 'ArrowUp':
      case 'w': {
        setDirection('UP');
        setPosition(pos => ({
          x: pos.x,
          y: pos.y - 1,
        }));
        break;
      }

      case 'ArrowDown':
      case 's': {
        setDirection('DOWN');
        setPosition(pos => ({
          x: pos.x,
          y: pos.y + 1,
        }));
        break;
      }

      case 'ArrowLeft':
      case 'a': {
        setDirection('LEFT');
        setPosition(pos => ({
          x: pos.x - 1,
          y: pos.y,
        }));
        break;
      }

      case 'ArrowRight':
      case 'd': {
        setDirection('RIGHT');
        setPosition(pos => ({
          x: pos.x + 1,
          y: pos.y,
        }));
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

  function handleKeyDown(event: KeyboardEvent) {
    console.log(event)
    checkKey(event.key);
  }
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if(isAttacking) {
      setTimeout(() => {
        setIsAttacking(false);
      }, 1000)
    }
  }, [isAttacking])

  return <Container isAttacking={isAttacking} direction={direction} size={size} horizontalPosition={position.x} vericalPosition={position.y} />;
}
