import styled from 'styled-components';

import { tileSize } from '../../config/Constants';

import { Colors } from '../../styles/Colors';

import { IStyledDoorProps } from './types';

const Container = styled.div<IStyledDoorProps>`
  width: ${`${(tileSize * 2) / 10}rem`};
  height: ${`${(tileSize * 2) / 10}rem`};
  position: absolute;
  top: ${({ y }) => `${(y * tileSize) / 10}rem`};
  left: ${({ x }) => `${(x * tileSize) / 10}rem`};
  background: url(images/door/door${({ isOpen }) => (isOpen ? '2' : '1')}.png)
    no-repeat ${Colors.light_gray};
  z-index: 99;
`;

export { Container };
