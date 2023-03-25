import { render } from '@testing-library/react';

import MDXRenderer from './mdxrenderer';

describe('MDXRenderer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MDXRenderer />);
    expect(baseElement).toBeTruthy();
  });
});
