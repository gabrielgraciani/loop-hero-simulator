import { EMapFloor } from '../enum/MapFloor';
import { randomNumber } from '../utils/helper';

function generateMap(rows: number, columns: number): number[][] {
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

  // start in one and finish less 2 to the number of the row doesn't be an wall
  const randomRow = randomNumber(1, rowsArray.length - 2);
  // start in one and finish less 2 to the number of the column doesn't be an wall
  const randomColumn = randomNumber(1, columnsArray.length - 2);

  map[randomRow][randomColumn] = EMapFloor.HERO;

  return map;
}

export { generateMap };
