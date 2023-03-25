import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import dynamic from 'next/dynamic';

import { Pre, CustomLink } from '@shared/mdx-elements';

export interface MDXRendererProps {
  mdxSource: string;
  /**
   * TODO: Improve typing
   */
  frontMatter?: any;
}

/**
 * TODO: Fix typing so components from getMDXComponent does not complain
 */
const components: any = {
  a: CustomLink,
  pre: Pre,
  Youtube: dynamic(async () => {
    return await import('@shared/mdx-elements/youtube/youtube');
  }),
};

export const MDXRenderer = ({ mdxSource, ...rest }: MDXRendererProps) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

  return <MDXLayout components={components} {...rest} />;
};

export default MDXRenderer;
