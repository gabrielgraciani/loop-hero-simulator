import { tileSize } from '../../config/Constants';

import { Colors } from '../../styles/Colors';

import { renderWithRedux } from '../../tests/renderWithRedux';

import { Door } from '.';

describe('Door Component', () => {
  it('should render correctly', () => {
    const position = { x: 1, y: 1 };

    const reducers = {
      updatedMapReducer: { enemiesQuantity: 5 },
    };

    const { getByTestId } = renderWithRedux({
      ui: <Door initialPosition={position} />,
      reducers,
    });

    const door = getByTestId('Door');

    expect(door).toHaveStyle(`top: ${(position.y * tileSize) / 10}rem`);
    expect(door).toHaveStyle(`left: ${(position.x * tileSize) / 10}rem`);
    expect(door).toHaveStyle(
      `background: url(images/door/door1.png) no-repeat ${Colors.light_gray}`,
    );
  });

  it('should render with open door background', () => {
    const position = { x: 5, y: 8 };

    const reducers = {
      updatedMapReducer: { enemiesQuantity: 0 },
    };

    const { getByTestId } = renderWithRedux({
      ui: <Door initialPosition={position} />,
      reducers,
    });

    const door = getByTestId('Door');

    expect(door).toHaveStyle(`top: ${(position.y * tileSize) / 10}rem`);
    expect(door).toHaveStyle(`left: ${(position.x * tileSize) / 10}rem`);
    expect(door).toHaveStyle(
      `background: url(images/door/door2.png) no-repeat ${Colors.light_gray}`,
    );
  });
});
