import { render } from '@testing-library/react';

import { Loader } from '.';

describe('Loader Component', () => {
  it('should render correctly', () => {
    const { container } = render(<Loader title="any title" duration={2} />);

    expect(container).toHaveTextContent('any title');
  });
});
