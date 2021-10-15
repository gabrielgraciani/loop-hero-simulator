import { useState, useEffect } from 'react';

interface ISize {
  width: number | undefined;
  height: number | undefined;
}

export function useWindowSize(): ISize {
  const [windowSize, setWindowSize] = useState<ISize>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth - 60,
        height: window.innerHeight - 60,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}
