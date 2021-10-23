import { useSelector } from 'react-redux';
import { IScoreState } from '../../redux/modules/score/types';
import { IGlobalReduxState } from '../../redux/store';
import { Container } from './styles';

export function Modal(): JSX.Element {
  const { score, gameOver } = useSelector<IGlobalReduxState, IScoreState>(
    state => state.scoreReducer,
  );

  return gameOver ? <Container> VOCÊ MORREU </Container> : <></>;
}
