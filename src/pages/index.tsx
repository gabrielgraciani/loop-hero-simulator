import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Game } from '../components/Game';
import { Loader } from '../components/Loader';

import { tileSize, loaderDurationMS } from '../config/Constants';

import { generateMap } from '../redux/modules/map/actions';
import { useWindowSize } from '../hooks/useWindowSize';

import { generateInitialMap } from '../map/helper';

import {
  updateMap,
  setEnemiesQuantity,
} from '../redux/modules/updatedMap/actions';

export default function Home(): JSX.Element {
  const { width, height } = useWindowSize();
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const horizontalSquares = Math.floor((width || 0) / tileSize);
    const verticalSquares = Math.floor((height || 0) / tileSize);

    const { map, enemiesQuantity } = generateInitialMap(
      verticalSquares,
      horizontalSquares,
    );
    dispatch(generateMap(map));
    dispatch(updateMap(map));
    dispatch(setEnemiesQuantity(enemiesQuantity));
  }, [width, height, dispatch]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, loaderDurationMS);
  }, []);

  return (
    <>
      <Head>
        <title>Walking Simulator Game</title>
      </Head>

      {isLoading ? (
        <Loader title="Generating a random map" duration={loaderDurationMS} />
      ) : (
        <Game />
      )}
    </>
  );
}
