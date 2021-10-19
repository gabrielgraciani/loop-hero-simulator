import { EMapFloor } from '../enum/MapFloor';
import { randomNumber } from '../utils/helper';

interface IGenerateRandomRowColumnProps {
  rowsLength: number;
  columnsLength: number;
}

interface IGenerateRandomRowColumnResponse {
  rowIndex: number;
  columnIndex: number;
}

interface IGenerateFilledFieldsOnMapProps {
  elementToBeRender: EMapFloor;
  elementQuantity: number;
  rowsLength: number;
  columnsLength: number;
  map: number[][];
}

function generateRandomRowColumn({
  rowsLength,
  columnsLength,
}: IGenerateRandomRowColumnProps): IGenerateRandomRowColumnResponse {
  // start in one and finish less 2 to the number of the row doesn't be an wall
  const randomRow = randomNumber({ min: 1, max: rowsLength - 2 });
  // start in one and finish less 2 to the number of the column doesn't be an wall
  const randomColumn = randomNumber({ min: 1, max: columnsLength - 2 });

  return {
    rowIndex: randomRow,
    columnIndex: randomColumn,
  };
}

function generateFilledFieldsOnMap({
  elementToBeRender,
  elementQuantity,
  rowsLength,
  columnsLength,
  map,
}: IGenerateFilledFieldsOnMapProps): number[][] {
  const newMap = [...map];
  const elementQuantityArray = Array.from(Array(elementQuantity).keys());

  elementQuantityArray.forEach(() => {
    const { columnIndex: randomElementColumn, rowIndex: randomElementRow } =
      generateRandomRowColumn({ rowsLength, columnsLength });

    const isLocalValid =
      newMap[randomElementRow][randomElementColumn] === EMapFloor.FLOOR;

    if (isLocalValid) {
      newMap[randomElementRow][randomElementColumn] = elementToBeRender;
    }
  });

  return newMap;
}

function generateInitialMap(rows: number, columns: number): number[][] {
  const map: number[][] = [];

  if (rows === 0 || columns === 0) return map;

  const rowsArray = Array.from(Array(rows).keys());
  const columnsArray = Array.from(Array(columns).keys());

  rowsArray.forEach((_, rowIndex) => {
    const isFirstRow = rowIndex === 0;
    const isLastRow = rowIndex === rowsArray.length - 1;

    const columnsGenerated = columnsArray.map((_, columnIndex) => {
      const isFirstColumn = columnIndex === 0;
      const isLastColumn = columnIndex === columnsArray.length - 1;

      // generating walls when is first and last row
      if (isFirstRow || isLastRow) {
        return EMapFloor.WALL;
      }

      // generating walls when is first and last column for every row
      if (isFirstColumn || isLastColumn) {
        return EMapFloor.WALL;
      }

      return EMapFloor.FLOOR;
    });
    map[rowIndex] = columnsGenerated;
  });

  /** CREATE HERO SPOT */
  const { rowIndex: randomHeroRow, columnIndex: randomHeroColumn } =
    generateRandomRowColumn({
      rowsLength: rowsArray.length,
      columnsLength: columnsArray.length,
    });

  map[randomHeroRow][randomHeroColumn] = EMapFloor.HERO;
  /** CREATE HERO SPOT */

  /** CREATE TRAP SPOTS */
  const trapsQuantity = randomNumber({ min: 4, max: 10 });

  generateFilledFieldsOnMap({
    elementToBeRender: EMapFloor.TRAP,
    elementQuantity: trapsQuantity,
    rowsLength: rowsArray.length,
    columnsLength: columnsArray.length,
    map,
  });
  /** CREATE TRAP SPOTS */

  /** CREATE SLIME SPOTS */
  const slimesQuantity = randomNumber({ min: 4, max: 8 });

  generateFilledFieldsOnMap({
    elementToBeRender: EMapFloor.SLIME,
    elementQuantity: slimesQuantity,
    rowsLength: rowsArray.length,
    columnsLength: columnsArray.length,
    map,
  });
  /** CREATE SLIME SPOTS */

  /** CREATE SKELETON SPOTS */
  const skeletonQuantity = randomNumber({ min: 4, max: 8 });

  const newMap = generateFilledFieldsOnMap({
    elementToBeRender: EMapFloor.SKELETON,
    elementQuantity: skeletonQuantity,
    rowsLength: rowsArray.length,
    columnsLength: columnsArray.length,
    map,
  });
  /** CREATE SKELETON SPOTS */

  return newMap;
}

export { generateInitialMap };
