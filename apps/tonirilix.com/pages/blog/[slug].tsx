import React from 'react';
import { readdirSync } from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';
import { MDXRemote } from 'next-mdx-remote';
import dynamic from 'next/dynamic';
import { getParsedFileContentBySlug, renderMarkdown } from '@common/markdown';

import styles from './[slug].module.scss';

/* eslint-disable-next-line */
export interface ArticleProps extends ParsedUrlQuery {
  slug: string;
  frontMatter?: any;
  html?: any;
}

const mdxElements = {
  Youtube: dynamic(async () => {
    return await import('@shared/mdx-elements/youtube/youtube');
  }),
};

const POST_PATH = join(process.cwd(), 'content');

export function Slug({ frontMatter, html }: ArticleProps) {
  return (
    <div className="m-6">
      <article className="prose prose-lg">
        <h1>{frontMatter.title}</h1>
        <div>by {frontMatter.author.name}</div>
      </article>
      <MDXRemote {...html} components={mdxElements} />
    </div>
  );
}

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params,
}: {
  params: ArticleProps;
}) => {
  // 1. parse the content of our markdown and separate it into front-matter and content
  const { frontMatter, content: markdownContent } = getParsedFileContentBySlug(
    params.slug,
    POST_PATH
  );

  // 2. convert markdown content => HTML
  const html = await renderMarkdown(markdownContent);

  return {
    props: {
      slug: params.slug,
      frontMatter: frontMatter,
      html,
    },
  };
};

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
  const paths = readdirSync(POST_PATH)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    fallback: false,
    paths,
  };
};

export default Slug;
