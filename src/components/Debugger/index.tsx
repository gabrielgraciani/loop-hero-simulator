import { ReactElement } from 'react';
import { v4 as uuid } from 'uuid';

import { Tile } from './Tile';

import { Container } from './styles';
import { IDebuggerProps } from './types';
import { useUpdatedMap } from '../../contexts/UpdatedMapContext';

export function Debugger({ active }: IDebuggerProps): JSX.Element {
  const { updatedMap } = useUpdatedMap();

  function renderDebuggerContent() {
    const elements: ReactElement[] = [];

    updatedMap.forEach((row, rowIndex) => {
      row.forEach((column, columnIndex) => {
        const position = { y: rowIndex, x: columnIndex };
        const value = updatedMap[rowIndex][columnIndex];
        const key = `${row}-${column}-${uuid()}`;

        elements.push(<Tile key={key} position={position} value={value} />);
      });
    });

    return elements;
  }

  return active ? <Container>{renderDebuggerContent()}</Container> : <></>;
}
