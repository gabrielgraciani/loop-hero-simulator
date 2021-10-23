import { FaLinkedin, FaGithub } from 'react-icons/fa';

import {
  Container,
  Title,
  CommandsButton,
  SocialsContainer,
  Link,
} from './styles';

export function Header(): JSX.Element {
  return (
    <Container>
      <Title>Loop Hero Simulator</Title>

      <CommandsButton>Comandos</CommandsButton>

      <SocialsContainer>
        <Link
          href="https://www.linkedin.com/in/gabriel-thomaz-graciani-98400b166/"
          target="_blank"
        >
          <FaLinkedin size={24} />
        </Link>

        <Link
          href="https://github.com/gabrielgraciani/walk-simulator-game"
          target="_blank"
        >
          <FaGithub size={24} />
        </Link>
      </SocialsContainer>
    </Container>
  );
}
