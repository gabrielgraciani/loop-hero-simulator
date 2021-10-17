import { ReactElement } from 'react';
import { v4 as uuid } from 'uuid';

import { useSelector } from 'react-redux';
import { Tile } from './Tile';

import { Container } from './styles';
import { IDebuggerProps } from './types';
import { IGlobalReduxState } from '../../redux/store';
import { IUpdatedMapState } from '../../redux/modules/updatedMap/types';

export function Debugger({ active }: IDebuggerProps): JSX.Element {
  const { updatedMap } = useSelector<IGlobalReduxState, IUpdatedMapState>(
    state => state.updatedMapReducer,
  );

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
