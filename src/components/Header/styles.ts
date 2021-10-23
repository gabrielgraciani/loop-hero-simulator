import styled from 'styled-components';

const Container = styled.div`
  width: calc(100% - 10rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0 0;
`;

const Title = styled.h1``;

const CommandsButton = styled.button`
  background: transparent;
`;

const SocialsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  svg:first-child {
    margin-right: 1.2rem;
  }
`;

const Link = styled.a``;

const CommandsContainer = styled.div`
  margin-top: 2.4rem;
`;

const Command = styled.div`
  margin-top: 0.8rem;
`;

export {
  Container,
  Title,
  CommandsButton,
  SocialsContainer,
  Link,
  Command,
  CommandsContainer,
};
