import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

interface IRenderWithReduxProps {
  ui: JSX.Element;
  reducers: {
    [key: string]: Record<string, unknown>;
  };
}

const mockStore = configureMockStore([thunk]);

export const renderWithRedux = ({
  ui,
  reducers,
}: IRenderWithReduxProps): RenderResult => {
  const store = mockStore(reducers);

  return render(<Provider store={store}>{ui}</Provider>);
};
