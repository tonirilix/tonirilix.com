import React from 'react';
import { readdirSync } from 'fs';
import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';
import { MDXRemote } from 'next-mdx-remote';
import dynamic from 'next/dynamic';
import { getParsedFileContentBySlug, renderMarkdown } from '@common/markdown';

import Link from 'next/link';
import { Backpack } from 'phosphor-react';
import { ActionButton } from '@shared/ui';

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

const POST_PATH = join(process.cwd(), process.env.articleMarkdownPath);

export function Slug({
  frontMatter,
  html,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <article className="pt-6">
      <ActionButton
        variant="link"
        href="/blog"
        startIcon={<Backpack size={24} className="inline-block" />}
      >
        Blog
      </ActionButton>
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-sky-500 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 mt-5">
        {frontMatter.title}
      </h1>
      <div className="prose prose-sm text-gray-500 dark:text-gray-400">
        by {frontMatter.author.name}
      </div>
      <div className="prose prose-lg max-w-none text-gray-500 dark:text-gray-400 mt-3">
        <MDXRemote {...html} components={mdxElements} />
      </div>
    </article>
  );
}

export const getStaticProps = async ({ params }: { params: ArticleProps }) => {
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
