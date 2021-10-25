import { renderHook } from '@testing-library/react-hooks';

import { useWindowSize } from '../useWindowSize';

describe('useWindowSize', () => {
  it('should return width and height sizes', () => {
    const { result } = renderHook(() => useWindowSize());

    expect(result.current.width).toBe(964);
    expect(result.current.height).toBe(708);
  });
});
