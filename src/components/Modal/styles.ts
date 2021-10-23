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
  transition: opacity 1.5s ease;

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
  position: relative;
  color: ${Colors.black};
`;

const Title = styled.h2`
  text-align: center;
  color: ${Colors.black};
`;

const CloseContainer = styled.div`
  color: ${Colors.black};
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  cursor: pointer;
`;

export { Container, ContentContainer, Title, CloseContainer };
