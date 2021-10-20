import { ReactElement, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useSelector } from 'react-redux';

import { Hero } from '../Hero';
import { Trap } from '../Trap';
import { Slime } from '../Slime';
import { Skeleton } from '../Skeleton';
import { Debugger } from '../Debugger';

import { EMapFloor } from '../../enum/MapFloor';

import { IGlobalReduxState } from '../../redux/store';
import { IMapState } from '../../redux/modules/map/types';

import {
  Container,
  SquaresContainer,
  SquareRowContainer,
  Square,
  DebuggerButton,
  Header,
  Title,
  Author,
  TextContainer,
} from '../../pages/Home.styles';
import { randomNumber } from '../../utils/helper';

export const Game = (): JSX.Element => {
  const { initialMap } = useSelector<IGlobalReduxState, IMapState>(
    state => state.mapReducer,
  );
  const [isDebuggerActive, setIsDebuggerActive] = useState(false);

  const isLocalEnvironment =
    process.env.NEXT_PUBLIC_APPLICATION_ENV === 'local';

  function handleChangeDebuggerActive() {
    setIsDebuggerActive(!isDebuggerActive);
  }

  function renderMapContent() {
    const elements: ReactElement[] = [];

    initialMap.forEach((row, rowIndex) => {
      row.forEach((column, columnIndex) => {
        const initialPosition = { x: columnIndex, y: rowIndex };
        const tileValue = initialMap[rowIndex][columnIndex];
        const key = `${row}-${column}-${uuid()}`;

        switch (tileValue) {
          case EMapFloor.HERO: {
            elements.push(<Hero key={key} initialPosition={initialPosition} />);
            break;
          }
          case EMapFloor.TRAP: {
            elements.push(<Trap key={key} initialPosition={initialPosition} />);
            break;
          }
          case EMapFloor.SLIME: {
            elements.push(
              <Slime key={key} initialPosition={initialPosition} />,
            );
            break;
          }
          case EMapFloor.SKELETON: {
            elements.push(
              <Skeleton key={key} initialPosition={initialPosition} />,
            );
            break;
          }

          default: {
            break;
          }
        }
      });
    });

    return elements;
  }

  return (
    <>
      <Header>
        <TextContainer>
          <Title>Walk Simulator Game</Title>
          <Author>
            made by{' '}
            <a
              href="https://www.linkedin.com/in/gabriel-thomaz-graciani-98400b166/"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Gabriel Thomaz Graciani</strong>
            </a>
          </Author>
        </TextContainer>
        {isLocalEnvironment && (
          <DebuggerButton type="button" onClick={handleChangeDebuggerActive}>
            Debugger
          </DebuggerButton>
        )}
      </Header>

      <Container>
        <SquaresContainer>
          {isDebuggerActive && isLocalEnvironment && <Debugger />}
          {renderMapContent()}
          {initialMap.map((row, rowIndex) => {
            const keyRow = uuid();
            return (
              <SquareRowContainer key={keyRow}>
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

                  const className = `${cornerLeftTopClassName} ${cornerRightTopClassName}
                  ${cornerLeftBottomClassName} ${cornerRightBottomClassName} ${wallTopClassName}
                   ${wallBottomClassName} ${wallLeftClassName} ${wallRightClassName}`;

                  return (
                    <Square
                      key={`${keyRow}-${keyColumn}`}
                      floor={randomFloor}
                      className={className}
                    />
                  );
                })}
              </SquareRowContainer>
            );
          })}
        </SquaresContainer>
      </Container>
    </>
  );
};
