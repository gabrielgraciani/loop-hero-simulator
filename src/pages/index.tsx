import Head from 'next/head';
import { ReactElement, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Hero } from '../components/Hero';
import { Trap } from '../components/Trap';
import { Debugger } from '../components/Debugger';

import { useMap } from '../contexts/MapContext';

import { EMapFloor } from '../enum/MapFloor';

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
} from './Home.styles';

export default function Home(): JSX.Element {
  const { map } = useMap();
  const [isDebuggerActive, setIsDebuggerActive] = useState(false);

  function handleChangeDebuggerActive() {
    setIsDebuggerActive(!isDebuggerActive);
  }

  function renderMapContent() {
    const elements: ReactElement[] = [];

    map.forEach((row, rowIndex) => {
      row.forEach((column, columnIndex) => {
        const initialPosition = { x: columnIndex, y: rowIndex };
        const tileValue = map[rowIndex][columnIndex];
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
      <Head>
        <title>Walking Simulator Game</title>
      </Head>

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
        <DebuggerButton type="button" onClick={handleChangeDebuggerActive}>
          Debugger
        </DebuggerButton>
      </Header>

      <Container>
        <SquaresContainer>
          {isDebuggerActive && <Debugger active={isDebuggerActive} />}
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
