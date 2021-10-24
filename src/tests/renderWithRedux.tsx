import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

interface IRenderWithReduxProps {
  ui: JSX.Element;
  reducerName: string;
  reducerValue: Record<string, unknown>;
}

const mockStore = configureMockStore([thunk]);

export const renderWithRedux = ({
  ui,
  reducerName,
  reducerValue,
}: IRenderWithReduxProps): RenderResult => {
  const store = mockStore({
    [reducerName]: reducerValue,
  });

  return render(<Provider store={store}>{ui}</Provider>);
};
