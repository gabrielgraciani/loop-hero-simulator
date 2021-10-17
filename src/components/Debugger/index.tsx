import { ReactElement } from 'react';
import { v4 as uuid } from 'uuid';

import { useMap } from '../../contexts/MapContext';

import { Tile } from './Tile';

import { Container } from './styles';
import { IDebuggerProps } from './types';

export function Debugger({ active }: IDebuggerProps): JSX.Element {
  const { map } = useMap();

  function renderDebuggerContent() {
    const elements: ReactElement[] = [];

    map.forEach((row, rowIndex) => {
      row.forEach((column, columnIndex) => {
        const position = { y: rowIndex, x: columnIndex };
        const value = map[rowIndex][columnIndex];
        const key = `${row}-${column}-${uuid()}`;

        elements.push(<Tile key={key} position={position} value={value} />);
      });
    });

    return elements;
  }

  return active ? <Container>{renderDebuggerContent()}</Container> : <></>;
}
