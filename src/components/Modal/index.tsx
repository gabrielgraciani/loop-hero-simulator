import { useDispatch, useSelector } from 'react-redux';

import { setIsLoading } from '../../redux/modules/map/actions';
import { setGameOver, setScore } from '../../redux/modules/score/actions';

import { IScoreState } from '../../redux/modules/score/types';
import { IGlobalReduxState } from '../../redux/store';

import {
  Container,
  ContentContainer,
  Title,
  ScoreContainer,
  ScoreItem,
  TryAggainButton,
} from './styles';

export function Modal(): JSX.Element {
  const { score, gameOver } = useSelector<IGlobalReduxState, IScoreState>(
    state => state.scoreReducer,
  );
  const dispatch = useDispatch();

  function handlePlayAggain() {
    dispatch(
      setScore({
        mapsGenerated: 0,
        enemiesKilled: 0,
      }),
    );
    dispatch(setGameOver(false));
    dispatch(setIsLoading(true));
  }

  return (
    <Container isActive={gameOver}>
      <ContentContainer>
        <Title>FIM DE JOGO</Title>

        <ScoreContainer>
          <ScoreItem>
            Pontuação Atual:{' '}
            <strong>{score.mapsGenerated} mapas gerados</strong> e{' '}
            <strong>{score.enemiesKilled} inimigos derrotados</strong>.
          </ScoreItem>
          <ScoreItem>
            Melhor Pontuação: <strong>2 mapas gerados</strong> e{' '}
            <strong>50 inimigos derrotados</strong>.
          </ScoreItem>
        </ScoreContainer>

        <TryAggainButton onClick={handlePlayAggain}>
          Jogar Novamente
        </TryAggainButton>
      </ContentContainer>
    </Container>
  );
}
