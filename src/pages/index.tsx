import Head from 'next/head';
import { ReactElement } from 'react';
import { v4 as uuid } from 'uuid';

import { Hero } from '../components/Hero';
import { Trap } from '../components/Trap';

import { useMap } from '../contexts/MapContext';

import { EMapFloor } from '../enum/MapFloor';

import {
  Container,
  SquaresContainer,
  SquareRowContainer,
  Square,
} from './Home.styles';

export default function Home(): JSX.Element {
  const { map } = useMap();

  function renderMapContent() {
    const array: ReactElement[] = [];

    map.forEach((row, rowIndex) => {
      row.forEach((column, columnIndex) => {
        const initialPosition = { x: columnIndex, y: rowIndex };
        const tileValue = map[rowIndex][columnIndex];
        const key = `${row}-${column}-${uuid()}`;

        switch (tileValue) {
          case EMapFloor.HERO: {
            array.push(<Hero key={key} initialPosition={initialPosition} />);
            break;
          }
          case EMapFloor.TRAP: {
            array.push(<Trap key={key} initialPosition={initialPosition} />);
            break;
          }

          default: {
            break;
          }
        }
      });
    });

    return array;
  }

  return (
    <>
      <Head>
        <title>Walking Simulator Game</title>
      </Head>

      <Container>
        <SquaresContainer>
          {renderMapContent()}
          {map.map(row => {
            const keyRow = uuid();
            return (
              <SquareRowContainer key={keyRow}>
                {row.map(() => {
                  const keyColumn = uuid();
                  return <Square key={`${keyRow}-${keyColumn}`} />;
                })}
              </SquareRowContainer>
            );
          })}
        </SquaresContainer>
      </Container>
    </>
  );
}
