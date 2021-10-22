import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Game } from '../components/Game';
import { Loader } from '../components/Loader';

import { tileSize, loaderDurationMS } from '../config/Constants';

import { useWindowSize } from '../hooks/useWindowSize';

import { generateMap, setIsLoading } from '../redux/modules/map/actions';
import {
  updateMap,
  setEnemiesQuantity,
} from '../redux/modules/updatedMap/actions';
import { IGlobalReduxState } from '../redux/store';
import { IMapState } from '../redux/modules/map/types';

import { generateInitialMap } from '../map/helper';

export default function Home(): JSX.Element {
  const { width, height } = useWindowSize();

  const { isLoading } = useSelector<IGlobalReduxState, IMapState>(
    state => state.mapReducer,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      const horizontalSquares = Math.floor((width || 0) / tileSize);
      const verticalSquares = Math.floor((height || 0) / tileSize);

      const { map, enemiesQuantity } = generateInitialMap(
        verticalSquares,
        horizontalSquares,
      );

      dispatch(setIsLoading(true));
      dispatch(generateMap(map));
      dispatch(updateMap(map));
      dispatch(setEnemiesQuantity(enemiesQuantity));
    }
  }, [width, height, dispatch, isLoading]);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        dispatch(setIsLoading(false));
      }, loaderDurationMS);
    }
  }, [dispatch, isLoading]);

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
