import userEvent from '@testing-library/user-event';

import { tileSize } from '../../config/Constants';

import { EMapFloor } from '../../enum/MapFloor';

import { renderWithRedux } from '../../tests/renderWithRedux';

import { Hero } from '.';

const updatedMap = [
  [
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.DOOR,
    EMapFloor.DOOR,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
  ],
  [
    EMapFloor.WALL,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.DOOR,
    EMapFloor.DOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.SLIME,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.WALL,
  ],
  [
    EMapFloor.WALL,
    EMapFloor.FLOOR,
    EMapFloor.TRAP,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.TRAP,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.SKELETON,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.WALL,
  ],
  [
    EMapFloor.WALL,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.SLIME,
    EMapFloor.WALL,
  ],
  [
    EMapFloor.WALL,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.SKELETON,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.WALL,
  ],
  [
    EMapFloor.WALL,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.TRAP,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.TRAP,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.TRAP,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.WALL,
  ],
  [
    EMapFloor.WALL,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.SLIME,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.WALL,
  ],
  [
    EMapFloor.WALL,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.TRAP,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.SLIME,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.WALL,
  ],
  [
    EMapFloor.WALL,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.TRAP,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.TRAP,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.WALL,
  ],
  [
    EMapFloor.WALL,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.SLIME,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.SLIME,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.TRAP,
    EMapFloor.TRAP,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.TRAP,
    EMapFloor.WALL,
  ],
  [
    EMapFloor.WALL,
    EMapFloor.FLOOR,
    EMapFloor.TRAP,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.TRAP,
    EMapFloor.TRAP,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.SLIME,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.WALL,
  ],
  [
    EMapFloor.WALL,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.SLIME,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.SKELETON,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.WALL,
  ],
  [
    EMapFloor.WALL,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.WALL,
  ],
  [
    EMapFloor.WALL,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.TRAP,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.WALL,
  ],
  [
    EMapFloor.WALL,
    EMapFloor.FLOOR,
    EMapFloor.TRAP,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.SKELETON,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.WALL,
  ],
  [
    EMapFloor.WALL,
    EMapFloor.FLOOR,
    EMapFloor.HERO,
    EMapFloor.FLOOR,
    EMapFloor.SLIME,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.SLIME,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.WALL,
  ],
  [
    EMapFloor.WALL,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.FLOOR,
    EMapFloor.WALL,
  ],
  [
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
    EMapFloor.WALL,
  ],
];

describe('Hero Component', () => {
  it('should render correctly', () => {
    const initialPosition = { x: 2, y: 4 };

    const reducers = {
      updatedMapReducer: {
        updatedMap,
        enemyAttackPosition: { x: EMapFloor.TRAP, y: 5 },
        enemiesQuantity: 5,
      },
      scoreReducer: {
        score: { enemiesKilled: 0, mapsGenerated: 1 },
      },
    };

    const { getByTestId } = renderWithRedux({
      ui: <Hero initialPosition={initialPosition} />,
      reducers,
    });

    const hero = getByTestId('Hero');

    expect(hero).toHaveStyle(`top: ${(initialPosition.y * tileSize) / 10}rem`);
    expect(hero).toHaveStyle(`left: ${(initialPosition.x * tileSize) / 10}rem`);
  });

  it('should change background when attack', () => {
    const initialPosition = { x: 2, y: 4 };

    const reducers = {
      updatedMapReducer: {
        updatedMap,
        enemyAttackPosition: { x: EMapFloor.TRAP, y: 5 },
        enemiesQuantity: 5,
      },
      scoreReducer: {
        score: { enemiesKilled: 0, mapsGenerated: 1 },
      },
    };

    const { getByTestId } = renderWithRedux({
      ui: <Hero initialPosition={initialPosition} />,
      reducers,
    });

    const hero = getByTestId('Hero');

    userEvent.type(hero, '{space}');

    expect(hero).toHaveStyle(
      'background: url(images/hero/hero_attack_DOWN.png) no-repeat',
    );
  });

  it('should change background and position when walk to left', () => {
    const initialPosition = { x: 4, y: 4 };

    const reducers = {
      updatedMapReducer: {
        updatedMap,
        enemyAttackPosition: { x: EMapFloor.TRAP, y: 5 },
        enemiesQuantity: 5,
      },
      scoreReducer: {
        score: { enemiesKilled: 0, mapsGenerated: 1 },
      },
    };

    const { getByTestId } = renderWithRedux({
      ui: <Hero initialPosition={initialPosition} />,
      reducers,
    });

    const hero = getByTestId('Hero');

    userEvent.type(hero, '{A}');
    userEvent.type(hero, '{ArrowLeft}');

    const newHeroPositionX = initialPosition.x - 2;

    expect(hero).toHaveStyle(
      'background: url(images/hero/hero_idle_LEFT.png) no-repeat',
    );
    expect(hero).toHaveStyle(`top: ${(initialPosition.y * tileSize) / 10}rem`);
    expect(hero).toHaveStyle(`left: ${(newHeroPositionX * tileSize) / 10}rem`);
  });

  it('should change background and position when walk to right', () => {
    const initialPosition = { x: 4, y: 4 };

    const reducers = {
      updatedMapReducer: {
        updatedMap,
        enemyAttackPosition: { x: EMapFloor.TRAP, y: 5 },
        enemiesQuantity: 5,
      },
      scoreReducer: {
        score: { enemiesKilled: 0, mapsGenerated: 1 },
      },
    };

    const { getByTestId } = renderWithRedux({
      ui: <Hero initialPosition={initialPosition} />,
      reducers,
    });

    const hero = getByTestId('Hero');

    userEvent.type(hero, '{D}');
    userEvent.type(hero, '{ArrowRight}');

    const newHeroPositionX = initialPosition.x + 2;

    expect(hero).toHaveStyle(
      'background: url(images/hero/hero_idle_RIGHT.png) no-repeat',
    );
    expect(hero).toHaveStyle(`top: ${(initialPosition.y * tileSize) / 10}rem`);
    expect(hero).toHaveStyle(`left: ${(newHeroPositionX * tileSize) / 10}rem`);
  });

  it('should change background and position when walk to down', () => {
    const initialPosition = { x: 4, y: 4 };

    const reducers = {
      updatedMapReducer: {
        updatedMap,
        enemyAttackPosition: { x: EMapFloor.TRAP, y: 5 },
        enemiesQuantity: 5,
      },
      scoreReducer: {
        score: { enemiesKilled: 0, mapsGenerated: 1 },
      },
    };

    const { getByTestId } = renderWithRedux({
      ui: <Hero initialPosition={initialPosition} />,
      reducers,
    });

    const hero = getByTestId('Hero');

    userEvent.type(hero, '{S}');
    userEvent.type(hero, '{ArrowDown}');

    const newHeroPositionY = initialPosition.y + 2;

    expect(hero).toHaveStyle(
      'background: url(images/hero/hero_idle_DOWN.png) no-repeat',
    );
    expect(hero).toHaveStyle(`top: ${(newHeroPositionY * tileSize) / 10}rem`);
    expect(hero).toHaveStyle(`left: ${(initialPosition.x * tileSize) / 10}rem`);
  });

  it('should change background and position when walk to up', () => {
    const initialPosition = { x: 4, y: 4 };

    const reducers = {
      updatedMapReducer: {
        updatedMap,
        enemyAttackPosition: { x: EMapFloor.TRAP, y: 5 },
        enemiesQuantity: 5,
      },
      scoreReducer: {
        score: { enemiesKilled: 0, mapsGenerated: 1 },
      },
    };

    const { getByTestId } = renderWithRedux({
      ui: <Hero initialPosition={initialPosition} />,
      reducers,
    });

    const hero = getByTestId('Hero');

    userEvent.type(hero, '{W}');
    userEvent.type(hero, '{ArrowUp}');

    const newHeroPositionY = initialPosition.y - 2;

    expect(hero).toHaveStyle(
      'background: url(images/hero/hero_idle_UP.png) no-repeat',
    );
    expect(hero).toHaveStyle(`top: ${(newHeroPositionY * tileSize) / 10}rem`);
    expect(hero).toHaveStyle(`left: ${(initialPosition.x * tileSize) / 10}rem`);
  });

  it('should now change anything when type other than specific keys', () => {
    const initialPosition = { x: 4, y: 4 };

    const reducers = {
      updatedMapReducer: {
        updatedMap,
        enemyAttackPosition: { x: EMapFloor.TRAP, y: 5 },
        enemiesQuantity: 5,
      },
      scoreReducer: {
        score: { enemiesKilled: 0, mapsGenerated: 1 },
      },
    };

    const { getByTestId } = renderWithRedux({
      ui: <Hero initialPosition={initialPosition} />,
      reducers,
    });

    const hero = getByTestId('Hero');

    userEvent.type(hero, '{Q}');
    userEvent.type(hero, '{E}');

    expect(hero).toHaveStyle(
      'background: url(images/hero/hero_idle_DOWN.png) no-repeat',
    );
    expect(hero).toHaveStyle(`top: ${(initialPosition.y * tileSize) / 10}rem`);
    expect(hero).toHaveStyle(`left: ${(initialPosition.x * tileSize) / 10}rem`);
  });

  it('should change background to death when walk to trap', () => {
    const initialPosition = { x: 2, y: 15 };

    const reducers = {
      updatedMapReducer: {
        updatedMap,
        enemyAttackPosition: { x: EMapFloor.TRAP, y: 5 },
        enemiesQuantity: 5,
      },
      scoreReducer: {
        score: { enemiesKilled: 0, mapsGenerated: 1 },
      },
    };

    const { getByTestId } = renderWithRedux({
      ui: <Hero initialPosition={initialPosition} />,
      reducers,
    });

    const hero = getByTestId('Hero');

    userEvent.type(hero, '{W}');

    expect(hero).toHaveStyle(
      'background: url(images/hero/hero_death.png) no-repeat',
    );
  });
});
