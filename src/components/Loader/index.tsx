import { Container, LoaderContainer, LoaderValue, Title } from './styles';
import { ILoaderProps } from './types';

export function Loader({ title, duration }: ILoaderProps): JSX.Element {
  return (
    <Container>
      <Title>{title}</Title>

      <LoaderContainer>
        <LoaderValue duration={duration} />
      </LoaderContainer>
    </Container>
  );
}
