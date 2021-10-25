import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { useInterval } from '../useInterval';

// jest.mock('../useInterval.ts', () => ({
//   useInterval: () => ({ width: 1600, height: 900 }),
// }));

describe('useInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should call function with delay', () => {
    const handleInterval = jest.fn();

    renderHook(() => useInterval(handleInterval, 1000));

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(handleInterval).toHaveBeenCalled();
  });

  it('should call function with no delay', () => {
    const handleIntervalNoCall = jest.fn();

    renderHook(() => useInterval(handleIntervalNoCall, null));

    expect(handleIntervalNoCall).not.toHaveBeenCalled();
  });
});
