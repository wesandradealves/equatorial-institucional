import { render } from '@testing-library/react';

import Accessibility from './accessibility';

describe('Accessibility', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Accessibility />);
    expect(baseElement).toBeTruthy();
  });
});
