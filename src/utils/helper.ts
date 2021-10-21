import { EWalker } from '../enum/Walker';
import { IPosition } from '../interfaces/Position';
import { EMapFloor } from '../enum/MapFloor';
import { EDirections } from '../enum/Directions';

interface IRandomNumberProps {
  min: number;
  max: number;
}

interface IHandleNextPositionProps {
  direction: EDirections;
  currentPosition: IPosition;
}

interface IGetValidMovesProps {
  value: number;
}

interface IIsValidMovement {
  map: number[][];
  nextPosition: IPosition;
  walker: EWalker;
}

interface IIsValidMovementResponse {
  isNextMovementValid: boolean;
  isNextMovementKillWalker: boolean;
}

function randomNumber({ min, max }: IRandomNumberProps): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleNextPosition({
  direction,
  currentPosition,
}: IHandleNextPositionProps): IPosition {
  switch (direction) {
    case EDirections.LEFT:
      return { x: currentPosition.x - 1, y: currentPosition.y };

    case EDirections.RIGHT:
      return { x: currentPosition.x + 1, y: currentPosition.y };

    case EDirections.DOWN:
      return { x: currentPosition.x, y: currentPosition.y + 1 };

    case EDirections.UP:
      return { x: currentPosition.x, y: currentPosition.y - 1 };

    default:
      return { x: currentPosition.x, y: currentPosition.y };
  }
}

function getHeroValidMoves({ value }: IGetValidMovesProps) {
  return {
    isNextMovementValid:
      value === EMapFloor.FLOOR ||
      value === EMapFloor.TRAP ||
      value === EMapFloor.HERO,
    isNextMovementKillWalker: value === EMapFloor.TRAP,
  };
}

function getEnemyValidMoves({ value }: IGetValidMovesProps) {
  return {
    isNextMovementValid: value === EMapFloor.FLOOR,
    isNextMovementKillWalker: false,
  };
}

function isValidMovement({
  map,
  nextPosition,
  walker,
}: IIsValidMovement): IIsValidMovementResponse {
  const mapValue = map[nextPosition.y][nextPosition.x];

  const result =
    walker === EWalker.HERO
      ? getHeroValidMoves({ value: mapValue })
      : getEnemyValidMoves({ value: mapValue });

  return result;
}

export { randomNumber, handleNextPosition, isValidMovement };
