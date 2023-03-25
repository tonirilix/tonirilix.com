import { render } from '@testing-library/react';

import Pre from './pre';

describe('Pre', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Pre />);
    expect(baseElement).toBeTruthy();
  });
});
