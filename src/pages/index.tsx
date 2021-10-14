import Head from 'next/head';

import { Hero } from '../components/Hero';

import { useWindowSize } from '../hooks/useWindowSize';

import {
  Container,
  SquaresContainer,
  SquareRowContainer,
  Square,
} from './Home.styles';

export default function Home() {
  const { width, height } = useWindowSize();

  const horizontalSquares = Math.round((width || 0) / 84);
  const verticalSquares = Math.round((height || 0) / 84);

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
