import { render, fireEvent } from '@testing-library/react';

import { Modal } from '.';

describe('Modal Component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Modal isActive title="any title">
        any children
      </Modal>,
    );

    expect(container).toHaveTextContent('any title');
    expect(container).toHaveTextContent('any children');
  });

  it('should close modal when click on close icon', () => {
    const handleClose = jest.fn();

    const { getByTestId, container } = render(
      <Modal isActive setIsActive={handleClose} title="any title" canClose>
        any children
      </Modal>,
    );

    const modal = getByTestId('Modal');

    const closeIcon = modal.getElementsByTagName('svg')[0];

    fireEvent.click(closeIcon);

    expect(container).toHaveTextContent('any title');
    expect(container).toHaveTextContent('any children');
    expect(handleClose).toHaveBeenCalled();
  });

  it('should render with opacity 0', () => {
    const { getByTestId } = render(
      <Modal isActive={false} title="any title">
        any children
      </Modal>,
    );

    const modal = getByTestId('Modal');

    expect(modal).toHaveStyle('opacity: 0');
    expect(modal).toHaveStyle('visibility: hidden');
  });
});
