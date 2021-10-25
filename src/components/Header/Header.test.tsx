import { fireEvent } from '@testing-library/react';

import { renderWithRedux } from '../../tests/renderWithRedux';

import { Header } from '.';

describe('Header Component', () => {
  it('should render correctly', () => {
    const reducers = {
      scoreReducer: { gameOver: false },
    };

    const { container } = renderWithRedux({
      ui: <Header />,
      reducers,
    });

    expect(container).toHaveTextContent('Loop Hero Simulator');
    expect(container).toHaveTextContent('Comandos');
  });

  it('should open modal when click on button', () => {
    const reducers = {
      scoreReducer: { gameOver: true },
    };

    const { getByTestId } = renderWithRedux({
      ui: <Header />,
      reducers,
    });

    const header = getByTestId('Header');

    const commandsButton = header.getElementsByTagName('button')[0];

    const headerModalContent = getByTestId('Modal');

    expect(headerModalContent).toHaveStyle('opacity: 0');
    expect(headerModalContent).toHaveStyle('visibility: hidden');

    fireEvent.click(commandsButton);

    expect(headerModalContent).toHaveStyle('opacity: 1');
    expect(headerModalContent).toHaveStyle('visibility: visible');
  });
});
