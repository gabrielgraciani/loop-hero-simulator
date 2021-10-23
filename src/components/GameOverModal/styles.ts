import styled from 'styled-components';

import { Colors } from '../../styles/Colors';

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

export { ScoreContainer, ScoreItem, TryAggainButton };
