import { useSelector } from 'react-redux';
import { IUpdatedMapState } from '../../redux/modules/updatedMap/types';
import { IGlobalReduxState } from '../../redux/store';
import { Container } from './styles';
import { IDoorProps } from './types';

export const Door = ({ initialPosition }: IDoorProps): JSX.Element => {
  const { enemiesQuantity } = useSelector<IGlobalReduxState, IUpdatedMapState>(
    state => state.updatedMapReducer,
  );

  return (
    <Container
      x={initialPosition.x}
      y={initialPosition.y}
      isOpen={enemiesQuantity === 0}
    >
      DOOR
    </Container>
  );
};
