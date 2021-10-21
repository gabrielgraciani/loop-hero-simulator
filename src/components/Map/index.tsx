import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { Tile } from '../Tile';

import { IMapState } from '../../redux/modules/map/types';
import { IGlobalReduxState } from '../../redux/store';

import { randomNumber } from '../../utils/helper';

import { Container, RowContainer } from './styles';
import { IMapProps } from './types';

export const Map = ({ children }: IMapProps): JSX.Element => {
  const { initialMap } = useSelector<IGlobalReduxState, IMapState>(
    state => state.mapReducer,
  );

  return (
    <Container>
      {children}
      {initialMap.map((row, rowIndex) => {
        const keyRow = uuid();
        return (
          <RowContainer key={keyRow}>
            {row.map((_, columnIndex) => {
              const keyColumn = uuid();
              const randomFloor = randomNumber({ min: 1, max: 10 });

              const cornerLeftTop = rowIndex === 0 && columnIndex === 0;
              const cornerRightTop =
                rowIndex === 0 && columnIndex === row.length - 1;
              const cornerLeftBottom =
                rowIndex === initialMap.length - 1 && columnIndex === 0;
              const cornerRightBottom =
                rowIndex === initialMap.length - 1 &&
                columnIndex === row.length - 1;

              const wallTop = rowIndex === 0;
              const wallBottom = rowIndex === initialMap.length - 1;
              const wallLeft = columnIndex === 0;
              const wallRight = columnIndex === row.length - 1;

              const cornerLeftTopClassName = cornerLeftTop
                ? 'cornerLeftTop'
                : '';
              const cornerRightTopClassName = cornerRightTop
                ? 'cornerRightTop'
                : '';
              const cornerLeftBottomClassName = cornerLeftBottom
                ? 'cornerLeftBottom'
                : '';
              const cornerRightBottomClassName = cornerRightBottom
                ? 'cornerRightBottom'
                : '';
              const wallTopClassName = wallTop ? 'wallTop' : '';
              const wallBottomClassName = wallBottom ? 'wallBottom' : '';
              const wallLeftClassName = wallLeft ? 'wallLeft' : '';
              const wallRightClassName = wallRight ? 'wallRight' : '';

              const noBorder =
                cornerLeftTop ||
                cornerRightTop ||
                cornerLeftBottom ||
                cornerRightBottom ||
                wallTop ||
                wallBottom ||
                wallLeft ||
                wallRight
                  ? 'noBorder'
                  : '';

              const className = `${cornerLeftTopClassName} ${cornerRightTopClassName}
            ${cornerLeftBottomClassName} ${cornerRightBottomClassName} ${wallTopClassName}
             ${wallBottomClassName} ${wallLeftClassName} ${wallRightClassName} ${noBorder}`;

              return (
                <Tile
                  key={`${keyRow}-${keyColumn}`}
                  floor={randomFloor}
                  className={className}
                />
              );
            })}
          </RowContainer>
        );
      })}
    </Container>
  );
};
