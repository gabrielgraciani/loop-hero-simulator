import { EDirections } from '../enum/Directions';
import { EMapFloor } from '../enum/MapFloor';
import { EWalker } from '../enum/Walker';

import { randomNumber, handleNextPosition, isValidMovement } from './helper';

describe('Helper', () => {
  it('should return correctly on call randomNumber', () => {
    const random = randomNumber({ min: 1, max: 1 });

    expect(random).toBe(1);
  });

  it('should return correctly on call handleNextPosition with LEFT direction', () => {
    const currentPosition = { x: 2, y: 2 };
    const nextPosition = handleNextPosition({
      direction: EDirections.LEFT,
      currentPosition,
    });

    expect(nextPosition).toStrictEqual({ x: 1, y: 2 });
  });

  it('should return correctly on call handleNextPosition with RIGHT direction', () => {
    const currentPosition = { x: 2, y: 2 };
    const nextPosition = handleNextPosition({
      direction: EDirections.RIGHT,
      currentPosition,
    });

    expect(nextPosition).toStrictEqual({ x: 3, y: 2 });
  });

  it('should return correctly on call handleNextPosition with UP direction', () => {
    const currentPosition = { x: 2, y: 2 };
    const nextPosition = handleNextPosition({
      direction: EDirections.UP,
      currentPosition,
    });

    expect(nextPosition).toStrictEqual({ x: 2, y: 1 });
  });

  it('should return correctly on call handleNextPosition with DOWN direction', () => {
    const currentPosition = { x: 2, y: 2 };
    const nextPosition = handleNextPosition({
      direction: EDirections.DOWN,
      currentPosition,
    });

    expect(nextPosition).toStrictEqual({ x: 2, y: 3 });
  });

  it('should return correctly on call handleNextPosition with wrong direction', () => {
    const currentPosition = { x: 2, y: 2 };
    const nextPosition = handleNextPosition({
      direction: 'ANY DIRECTION' as EDirections,
      currentPosition,
    });

    expect(nextPosition).toStrictEqual({ x: 2, y: 2 });
  });

  it('should movement is valid on call isValidMovement with HERO walker', () => {
    const map = [
      [
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
      ],
      [
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
      ],
      [
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
      ],
    ];
    const nextPosition = { x: 2, y: 2 };

    const nextPositionIsValid = isValidMovement({
      map,
      nextPosition,
      walker: EWalker.HERO,
    });

    expect(nextPositionIsValid).toStrictEqual({
      isNextMovementValid: true,
      isNextMovementKillWalker: false,
      isNextMovementIsDoor: false,
    });
  });

  it('should movement is valid on call isValidMovement with ENEMY walker', () => {
    const map = [
      [
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
      ],
      [
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
      ],
      [
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
      ],
    ];
    const nextPosition = { x: 2, y: 2 };

    const nextPositionIsValid = isValidMovement({
      map,
      nextPosition,
      walker: EWalker.ENEMY,
    });

    expect(nextPositionIsValid).toStrictEqual({
      isNextMovementValid: true,
      isNextMovementKillWalker: false,
      isNextMovementIsDoor: false,
    });
  });

  it('should movement is invalid on call isValidMovement with HERO walker', () => {
    const map = [
      [
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
      ],
      [
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
      ],
      [
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.WALL,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
        EMapFloor.FLOOR,
      ],
    ];
    const nextPosition = { x: 2, y: 2 };

    const nextPositionIsValid = isValidMovement({
      map,
      nextPosition,
      walker: EWalker.HERO,
    });

    expect(nextPositionIsValid).toStrictEqual({
      isNextMovementValid: false,
      isNextMovementKillWalker: false,
      isNextMovementIsDoor: false,
    });
  });
});
