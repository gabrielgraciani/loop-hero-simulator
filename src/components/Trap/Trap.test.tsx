import { render } from '@testing-library/react';

import { tileSize } from '../../config/Constants';

import { Trap } from '.';

describe('Trap Component', () => {
  it('should render correctly', () => {
    const initialPosition = { x: 2, y: 4 };
    const { getByTestId } = render(<Trap initialPosition={initialPosition} />);

    const trap = getByTestId(
      `Trap-y=${initialPosition.y}-x=${initialPosition.x}`,
    );

    expect(trap).toHaveStyle(`top: ${(initialPosition.y * tileSize) / 10}rem`);
    expect(trap).toHaveStyle(`left: ${(initialPosition.x * tileSize) / 10}rem`);
  });
});
