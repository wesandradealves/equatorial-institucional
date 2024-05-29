import { render } from '@testing-library/react';

import ServiceCard from './service-card';

describe('ServiceCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ServiceCard />);
    expect(baseElement).toBeTruthy();
  });
});
