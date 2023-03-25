import React from 'react';
import { readdirSync } from 'fs';
import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';
import { formatSlug, getFileBySlug } from '@common/markdown';

import { Backpack } from 'phosphor-react';
import { ActionButton } from '@shared/ui';
import { MDXRenderer } from '@shared/mdx-elements';

export interface ArticleProps extends ParsedUrlQuery {
  slug: string;
}

const POST_PATH = join(process.cwd(), process.env.articleMarkdownPath);

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
  const paths = readdirSync(POST_PATH)
    .map(formatSlug)
    .map((slug) => ({ params: { slug } }));

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps = async ({ params }: { params: ArticleProps }) => {
  const post = await getFileBySlug(
    process.env.articleMarkdownPath,
    params.slug
  );

  return {
    props: {
      slug: params.slug,
      post,
    },
  };
};

export function Slug({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { mdxSource, frontMatter } = post;

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
        by {frontMatter.author.name} - {frontMatter.readingTime.text}
      </div>
      <div className="prose prose-lg max-w-none text-gray-500 dark:text-gray-400 mt-3">
        <MDXRenderer mdxSource={mdxSource} frontMatter={frontMatter} />
      </div>
    </article>
  );
}

export default Slug;
