import styled, { css } from 'styled-components';
import { EMapFloor } from '../../../enum/MapFloor';

import { tileSize } from '../../../config/Constants';

import { IStyledTileProps } from './types';

const colorVariation = {
  [EMapFloor.FLOOR]: css`
    color: darkgrey;
    border-color: darkgrey;
  `,
  [EMapFloor.WALL]: css`
    color: yellow;
    border-color: yellow;
  `,
  [EMapFloor.HERO]: css`
    color: magenta;
    border-color: magenta;
  `,
  [EMapFloor.TRAP]: css`
    color: chartreuse;
    border-color: chartreuse;
  `,
  [EMapFloor.SLIME]: css`
    color: red;
    border-color: red;
  `,
  [EMapFloor.SKELETON]: css`
    color: orange;
    border-color: orange;
  `,
};

const Container = styled.div.attrs((props: IStyledTileProps) => {
  return {
    style: {
      left: `${(props.x * tileSize) / 10}rem`,
      top: `${(props.y * tileSize) / 10}rem`,
    },
  };
})<IStyledTileProps>`
  width: ${tileSize / 10}rem;
  height: ${tileSize / 10}rem;
  border: 2px solid;
  position: absolute;
  font-size: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;

  ${props => colorVariation[props.value]}
`;

export { Container };
