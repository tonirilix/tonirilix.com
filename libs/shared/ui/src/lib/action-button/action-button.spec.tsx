import { render } from '@testing-library/react';

import ActionButton from './action-button';

describe('ActionButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ActionButton variant="button">Click me</ActionButton>
    );
    expect(baseElement).toBeTruthy();
  });
});
