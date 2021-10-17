import styled, { css } from 'styled-components';

import { tileSize } from '../../../config/Constants';

import { IStyledTileProps } from './types';

const colorVariation = {
  0: css`
    color: darkgrey;
    border-color: darkgrey;
  `,
  1: css`
    color: yellow;
    border-color: yellow;
  `,
  2: css`
    color: magenta;
    border-color: magenta;
  `,
  3: css`
    color: chartreuse;
    border-color: chartreuse;
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
