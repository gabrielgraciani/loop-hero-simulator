import { IPosition } from '../../../interfaces/Position';

export interface IUpdatedMapState {
  updatedMap: number[][];
  heroAttackPosition?: IPosition;
  enemyAttackPosition?: IPosition[];
}
