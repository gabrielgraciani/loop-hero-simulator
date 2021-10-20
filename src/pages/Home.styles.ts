import styled from 'styled-components';

import { Colors } from '../styles/Colors';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  width: calc(100% - 10rem);
  align-items: center;
  justify-content: space-between;
`;

const DebuggerButton = styled.button`
  width: 12rem;
  background: transparent;
  border-radius: 0.4rem;
  border: 0.2rem solid ${Colors.light_gray};
  font-size: 1.6rem;
  padding: 0.2rem;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Title = styled.h1`
  font-size: 3.2rem;
`;

const Author = styled.span`
  padding-bottom: 0.4rem;
  margin-left: 2rem;
  font-style: italic;
`;

export { Container, DebuggerButton, Header, Title, Author, TextContainer };
