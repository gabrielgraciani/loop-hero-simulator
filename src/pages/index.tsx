import { Hero } from '../components/Hero';

import { useWindowSize } from '../hooks/useWindowSize';

export default function Home() {
  const { width, height } = useWindowSize();

  const horizontalSquares = Math.round((width || 0) / 84);
  const verticalSquares = Math.round((height || 0) / 84);

  const horizontalSquaresArray = Array.from(Array(horizontalSquares).keys());
  const verticalSquaresArray = Array.from(Array(verticalSquares).keys());

  return (
    <div
      style={{ backgroundColor: 'green', position: 'relative', height: '100%' }}
    >
      <Hero />
      {verticalSquaresArray.map(itemVertical => (
        <div style={{ display: 'flex' }} key={itemVertical}>
          {horizontalSquaresArray.map(itemHorizontal => (
            <div
              style={{
                width: '84px',
                height: '84px',
                background: 'blue',
                border: '1px solid red',
              }}
              key={`${itemVertical}-${itemHorizontal}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
