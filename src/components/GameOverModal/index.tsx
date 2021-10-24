import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';

import { Modal } from '../Modal';

import { setIsLoading } from '../../redux/modules/map/actions';
import { setGameOver, setScore } from '../../redux/modules/score/actions';

import { IScore, IScoreState } from '../../redux/modules/score/types';
import { IGlobalReduxState } from '../../redux/store';

import { ScoreContainer, ScoreItem, TryAggainButton } from './styles';

export function GameOverModal(): JSX.Element {
  const { score, gameOver } = useSelector<IGlobalReduxState, IScoreState>(
    state => state.scoreReducer,
  );
  const [highScore, setHighScore] = useState<IScore | undefined>(undefined);

  const dispatch = useDispatch();

  function handlePlayAgain() {
    dispatch(
      setScore({
        mapsGenerated: 1,
        enemiesKilled: 0,
      }),
    );
    dispatch(setGameOver(false));
    dispatch(setIsLoading(true));
  }

  useEffect(() => {
    if (gameOver) {
      const highScoreCookie = Cookies.get('WALK_SIMULATOR_GAME:HIGH_SCORE');
      const highScoreValue: IScore = highScoreCookie
        ? JSON.parse(highScoreCookie)
        : { enemiesKilled: 0, mapsGenerated: 0 };

      if (score.mapsGenerated >= highScoreValue.mapsGenerated) {
        if (score.enemiesKilled >= highScoreValue.enemiesKilled) {
          Cookies.set('WALK_SIMULATOR_GAME:HIGH_SCORE', JSON.stringify(score), {
            expires: 365,
          });

          setHighScore(score);
        } else {
          setHighScore(highScoreValue);
        }
      } else {
        setHighScore(highScoreValue);
      }
    }
  }, [gameOver, score]);

  const content = (
    <Modal isActive={gameOver} title="FIM DE JOGO">
      <ScoreContainer>
        <ScoreItem>
          Pontuação Atual: <strong>{score.mapsGenerated} mapas gerados</strong>{' '}
          e <strong>{score.enemiesKilled} inimigos derrotados</strong>.
        </ScoreItem>
        <ScoreItem>
          Melhor Pontuação:{' '}
          <strong>{highScore?.mapsGenerated} mapas gerados</strong> e{' '}
          <strong>{highScore?.enemiesKilled} inimigos derrotados</strong>.
        </ScoreItem>
      </ScoreContainer>

      <TryAggainButton onClick={handlePlayAgain}>
        Jogar Novamente
      </TryAggainButton>
    </Modal>
  );

  return content;
}
