import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { generateMap } from '../redux/modules/map/actions';
import { useWindowSize } from '../hooks/useWindowSize';
import { tileSize } from '../config/Constants';
import { generateInitialMap } from '../map/helper';

import { Game } from '../components/Game';

export default function Home(): JSX.Element {
  const { width, height } = useWindowSize();

  const dispatch = useDispatch();

  useEffect(() => {
    const horizontalSquares = Math.floor((width || 0) / tileSize);
    const verticalSquares = Math.floor((height || 0) / tileSize);

    const generatedMap = generateInitialMap(verticalSquares, horizontalSquares);
    dispatch(generateMap(generatedMap));
  }, [width, height, dispatch]);

  return (
    <>
      <Head>
        <title>Walking Simulator Game</title>
      </Head>

      <Game />
    </>
  );
}
