import styled from 'styled-components';

import { Colors } from '../../styles/Colors';

import { IStyledModalProps } from './types';

const Container = styled.div<IStyledModalProps>`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  z-index: 999;
  opacity: ${({ isActive }) => (isActive ? '1' : '0')};
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  transition: opacity 0.5 ease;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${Colors.blackOpacity70};
  }
`;

const ContentContainer = styled.div`
  background: ${Colors.white};
  z-index: 9999;
  border-radius: 0.4rem;
  padding: 4rem 8rem;
`;

const Title = styled.h2`
  text-align: center;
  color: ${Colors.black};
`;

const ScoreContainer = styled.div`
  width: 100%;
`;

const ScoreItem = styled.h4`
  width: 100%;
  color: ${Colors.black};
  margin-top: 1.2rem;

  strong {
    color: ${Colors.life};
  }
`;

const TryAggainButton = styled.button`
  margin-top: 2.4rem;
  width: 100%;
  background: red;
  padding: 1rem;
  border-radius: 0.4rem;
`;

export {
  Container,
  ContentContainer,
  Title,
  ScoreContainer,
  ScoreItem,
  TryAggainButton,
};
