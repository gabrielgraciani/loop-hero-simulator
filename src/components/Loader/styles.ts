import styled, { keyframes } from 'styled-components';

import { Colors } from '../../styles/Colors';

import { IStyledLoaderProps } from './types';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`;

const LoaderContainer = styled.div`
  background: ${Colors.dark_gray};
  justify-content: flex-start;
  border-radius: 10rem;
  align-items: center;
  position: relative;
  padding: 0 0.4rem;
  display: flex;
  height: 4rem;
  width: 50rem;
  box-shadow: 0 0 2rem -0.5rem ${Colors.white};
`;

const loadAnimation = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

const LoaderValue = styled.div<IStyledLoaderProps>`
  animation: ${loadAnimation} ${({ duration }) => duration / 1000}s normal
    forwards;
  box-shadow: 0 1rem 4rem -1rem ${Colors.white};
  border-radius: 10rem;
  background: ${Colors.white};
  height: 3rem;
  width: 0;
`;

const Title = styled.h2`
  margin-bottom: 1.2rem;
`;

export { Container, LoaderValue, LoaderContainer, Title };
