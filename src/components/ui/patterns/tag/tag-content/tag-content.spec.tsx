import { render } from '@testing-library/react';

import TagContent from './tag-content';

describe('TagContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TagContent />);
    expect(baseElement).toBeTruthy();
  });
});
