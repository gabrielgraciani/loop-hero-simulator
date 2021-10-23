import { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { IScoreState } from '../../redux/modules/score/types';
import { IGlobalReduxState } from '../../redux/store';

import { Modal } from '../Modal';

import {
  Container,
  Title,
  CommandsButton,
  SocialsContainer,
  Link,
  CommandsContainer,
  Command,
} from './styles';

export function Header(): JSX.Element {
  const { gameOver } = useSelector<IGlobalReduxState, IScoreState>(
    state => state.scoreReducer,
  );
  const [isModalActive, setIsModalActive] = useState(false);

  function handleOpenModal() {
    setIsModalActive(true);
  }

  useEffect(() => {
    if (gameOver) {
      setIsModalActive(false);
    }
  }, [gameOver]);

  return (
    <>
      <Container>
        <Title>Loop Hero Simulator</Title>

        <CommandsButton onClick={handleOpenModal}>Comandos</CommandsButton>

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

      <Modal
        isActive={isModalActive}
        setIsActive={setIsModalActive}
        title="Lista de Comandos"
        canClose
      >
        <CommandsContainer>
          <Command>
            <strong>Mover o Personagem:</strong> W, A, S, D ou utilizar as setas
            do teclado.
          </Command>

          <Command>
            <strong>Atacar:</strong> Barra de espaço.
          </Command>
        </CommandsContainer>
      </Modal>
    </>
  );
}
