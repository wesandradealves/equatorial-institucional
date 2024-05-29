import { render } from '@testing-library/react';

import PageControl from './page-control';

describe('PageControl', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageControl />);
    expect(baseElement).toBeTruthy();
  });
});
