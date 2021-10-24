import { render } from '@testing-library/react';

import { Tile } from '.';

describe('Tile Component', () => {
  it('should render correctly', () => {
    const floor = 1;
    const { getByTestId } = render(<Tile floor={floor} />);

    const tile = getByTestId('Tile');

    expect(tile).toHaveStyle(
      `background: url(images/floor/floor${floor}.png) no-repeat;`,
    );
  });

  it('should render wallTop background', () => {
    const floor = 1;
    const className = 'wallTop';
    const { getByTestId } = render(
      <Tile floor={floor} className={className} />,
    );

    const tile = getByTestId('Tile');

    expect(tile).toHaveStyle(
      `background: url(images/wall/wall.png) no-repeat;`,
    );
  });

  it('should render wallLeft background', () => {
    const floor = 1;
    const className = 'wallLeft';
    const { getByTestId } = render(
      <Tile floor={floor} className={className} />,
    );

    const tile = getByTestId('Tile');

    expect(tile).toHaveStyle(
      `background: url(images/wall/wall.png) no-repeat;`,
    );
    expect(tile).toHaveStyle('transform: rotate(-90deg)');
  });

  it('should render wallRight background', () => {
    const floor = 1;
    const className = 'wallRight';
    const { getByTestId } = render(
      <Tile floor={floor} className={className} />,
    );

    const tile = getByTestId('Tile');

    expect(tile).toHaveStyle(
      `background: url(images/wall/wall.png) no-repeat;`,
    );
    expect(tile).toHaveStyle('transform: rotate(90deg)');
  });

  it('should render wallBottom background', () => {
    const floor = 1;
    const className = 'wallBottom';
    const { getByTestId } = render(
      <Tile floor={floor} className={className} />,
    );

    const tile = getByTestId('Tile');

    expect(tile).toHaveStyle(
      `background: url(images/wall/wall.png) no-repeat;`,
    );
    expect(tile).toHaveStyle('transform: rotate(-180deg)');
  });

  it('should render cornerLeftTop background', () => {
    const floor = 1;
    const className = 'cornerLeftTop';
    const { getByTestId } = render(
      <Tile floor={floor} className={className} />,
    );

    const tile = getByTestId('Tile');

    expect(tile).toHaveStyle(
      `background: url(images/wall/wallCorner.png) no-repeat;`,
    );
    expect(tile).toHaveStyle('transform: rotate(0)');
  });

  it('should render cornerRightTop background', () => {
    const floor = 1;
    const className = 'cornerRightTop';
    const { getByTestId } = render(
      <Tile floor={floor} className={className} />,
    );

    const tile = getByTestId('Tile');

    expect(tile).toHaveStyle(
      `background: url(images/wall/wallCorner.png) no-repeat;`,
    );
    expect(tile).toHaveStyle('transform: rotate(90deg)');
  });

  it('should render cornerLeftBottom background', () => {
    const floor = 1;
    const className = 'cornerLeftBottom';
    const { getByTestId } = render(
      <Tile floor={floor} className={className} />,
    );

    const tile = getByTestId('Tile');

    expect(tile).toHaveStyle(
      `background: url(images/wall/wallCorner.png) no-repeat;`,
    );
    expect(tile).toHaveStyle('transform: rotate(-90deg)');
  });

  it('should render cornerRightBottom background', () => {
    const floor = 1;
    const className = 'cornerRightBottom';
    const { getByTestId } = render(
      <Tile floor={floor} className={className} />,
    );

    const tile = getByTestId('Tile');

    expect(tile).toHaveStyle(
      `background: url(images/wall/wallCorner.png) no-repeat;`,
    );
    expect(tile).toHaveStyle('transform: rotate(-180deg)');
  });
});
