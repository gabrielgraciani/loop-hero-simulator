import { fireEvent } from '@testing-library/react';

import { renderWithRedux } from '../../tests/renderWithRedux';

import { GameOverModal } from '.';

jest.mock(
  'js-cookie',
  () => ({
    get: () => '{"enemiesKilled":7,"mapsGenerated":1}',
    set: () => '{"enemiesKilled":7,"mapsGenerated":1}',
  }),
  {
    // this just for being lazy to install the module :)
    virtual: true,
  },
);

describe('GameOverModal Component', () => {
  it('should render correctly', () => {
    const { container } = renderWithRedux({
      ui: <GameOverModal />,
      reducerName: 'scoreReducer',
      reducerValue: {
        gameOver: false,
        score: { enemiesKilled: 0, mapsGenerated: 1 },
      },
    });

    expect(container).toHaveTextContent('1 mapas gerados');
    expect(container).toHaveTextContent('0 inimigos derrotados');
  });

  it('should call play again button when clicked', () => {
    const { getByTestId } = renderWithRedux({
      ui: <GameOverModal />,
      reducerName: 'scoreReducer',
      reducerValue: {
        gameOver: false,
        score: { enemiesKilled: 0, mapsGenerated: 1 },
      },
    });

    const modal = getByTestId('Modal');
    const playAgainButton = modal.getElementsByTagName('button')[0];

    fireEvent.click(playAgainButton);
  });

  it('should render with high score by cookie', () => {
    const { container } = renderWithRedux({
      ui: <GameOverModal />,
      reducerName: 'scoreReducer',
      reducerValue: {
        gameOver: true,
        score: { enemiesKilled: 3, mapsGenerated: 1 },
      },
    });

    expect(container).toHaveTextContent('1 mapas gerados');
    expect(container).toHaveTextContent('3 inimigos derrotados');

    expect(container).toHaveTextContent('7 inimigos derrotados');
  });

  it('should actual score is bigger than score from cookie', () => {
    const { container } = renderWithRedux({
      ui: <GameOverModal />,
      reducerName: 'scoreReducer',
      reducerValue: {
        gameOver: true,
        score: { enemiesKilled: 15, mapsGenerated: 2 },
      },
    });

    expect(container).toHaveTextContent('2 mapas gerados');
    expect(container).toHaveTextContent('15 inimigos derrotados');
  });

  it('should score from cookie is bigger than actual score', () => {
    const { container } = renderWithRedux({
      ui: <GameOverModal />,
      reducerName: 'scoreReducer',
      reducerValue: {
        gameOver: true,
        score: { enemiesKilled: 1, mapsGenerated: 0 },
      },
    });

    expect(container).toHaveTextContent('1 mapas gerados');
    expect(container).toHaveTextContent('7 inimigos derrotados');
  });
});
