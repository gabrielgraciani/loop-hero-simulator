import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { tileSize } from '../../config/Constants';

import { Colors } from '../../styles/Colors';

import { Door } from '.';

const mockStore = configureMockStore([thunk]);

describe('Door Component', () => {
  it('should render correctly', () => {
    const store = mockStore({
      updatedMapReducer: { enemiesQuantity: 5 },
    });

    const position = { x: 1, y: 1 };

    const { getByTestId } = render(
      <Provider store={store}>
        <Door initialPosition={position} />
      </Provider>,
    );

    const door = getByTestId('Door');

    expect(door).toHaveStyle(`top: ${(position.y * tileSize) / 10}rem`);
    expect(door).toHaveStyle(`left: ${(position.x * tileSize) / 10}rem`);
    expect(door).toHaveStyle(
      `background: url(images/door/door1.png) no-repeat ${Colors.light_gray}`,
    );
  });

  it('should render with open door background', () => {
    const store = mockStore({
      updatedMapReducer: { enemiesQuantity: 0 },
    });

    const position = { x: 5, y: 8 };

    const { getByTestId } = render(
      <Provider store={store}>
        <Door initialPosition={position} />
      </Provider>,
    );

    const door = getByTestId('Door');

    expect(door).toHaveStyle(`top: ${(position.y * tileSize) / 10}rem`);
    expect(door).toHaveStyle(`left: ${(position.x * tileSize) / 10}rem`);
    expect(door).toHaveStyle(
      `background: url(images/door/door2.png) no-repeat ${Colors.light_gray}`,
    );
  });
});
