import { Container } from './styles';
import { ITileProps } from './types';

export function Tile({ position, value }: ITileProps): JSX.Element {
  return (
    <Container x={position.x} y={position.y} value={value}>
      {value}
    </Container>
  );
}
