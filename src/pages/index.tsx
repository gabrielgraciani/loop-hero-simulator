import Head from 'next/head';

import { Hero } from '../components/Hero';

import { useWindowSize } from '../hooks/useWindowSize';
import { tileSize } from '../config/Constants';

import {
  Container,
  SquaresContainer,
  SquareRowContainer,
  Square,
} from './Home.styles';

export default function Home(): JSX.Element {
  const { width, height } = useWindowSize();

  const horizontalSquares = Math.floor((width || 0) / tileSize);
  const verticalSquares = Math.floor((height || 0) / tileSize);

  const horizontalSquaresArray = Array.from(Array(horizontalSquares).keys());
  const verticalSquaresArray = Array.from(Array(verticalSquares).keys());

  return (
    <>
      <Head>
        <title>Walking Simulator Game</title>
      </Head>

      <Container>
        <SquaresContainer>
          <Hero />
          {verticalSquaresArray.map(itemVertical => (
            <SquareRowContainer key={itemVertical}>
              {horizontalSquaresArray.map(itemHorizontal => (
                <Square key={`${itemVertical}-${itemHorizontal}`} />
              ))}
            </SquareRowContainer>
          ))}
        </SquaresContainer>
      </Container>
    </>
  );
}
