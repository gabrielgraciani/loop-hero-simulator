import { EMapFloor } from '../enum/MapFloor';
import { generateInitialMap } from './helper';

describe('Map Helper', () => {
  it('should return correctly on call generateInitialMap', () => {
    const { map, enemiesQuantity } = generateInitialMap(14, 15);

    const mapRowsLength = map.length;
    const mapColumnsLength = map[0]?.length;

    let mapEnemies = 0;
    map.forEach(row => {
      row.forEach(column => {
        if (column === EMapFloor.SKELETON || column === EMapFloor.SLIME) {
          mapEnemies += 1;
        }
      });
    });

    expect(mapRowsLength).toBe(14);
    expect(mapColumnsLength).toBe(15);
    expect(enemiesQuantity).toBe(mapEnemies);
  });

  it('should return empty map if rows or columns is 0', () => {
    const { map, enemiesQuantity } = generateInitialMap(0, 0);

    expect(map).toStrictEqual([]);
    expect(enemiesQuantity).toBe(0);
  });

  it('should return correctly on call generateInitialMap with low values', () => {
    const { map, enemiesQuantity } = generateInitialMap(4, 5);

    const mapRowsLength = map.length;
    const mapColumnsLength = map[0]?.length;

    let mapEnemies = 0;
    map.forEach(row => {
      row.forEach(column => {
        if (column === EMapFloor.SKELETON || column === EMapFloor.SLIME) {
          mapEnemies += 1;
        }
      });
    });

    expect(mapRowsLength).toBe(4);
    expect(mapColumnsLength).toBe(5);
    expect(enemiesQuantity).toBe(mapEnemies);
  });
});
