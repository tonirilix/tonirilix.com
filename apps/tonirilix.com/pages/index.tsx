import { TopicButton } from '@shared/ui';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'phosphor-react';

const posts = [
  {
    slug: '123',
    date: '123',
    title: '123',
    summary: 'uno dos tres',
    tags: ['uno', 'dos', 'tres'],
  },
];

const Tag = ({ text }) => {
  return (
    <Link
      href={`/tags/${text}`}
      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {text.split(' ').join('-')}
    </Link>
  );
};

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Tonirilix Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <article className="prose lg:prose-lg mt-6">
          <h1 className="text-6xl font-bold">
            Welcome to my <span className="text-blue-600">Blog!</span>
          </h1>
          <p>
            I write about my experiences in software development. Sometimes I do
            experiments about things that I'm sure nobody else cares about.
          </p>
        </article>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://www.youtube.com/@webartisan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with <Heart color="#AE2983" weight="fill" size={32} /> by
          WEBartisan
        </a>
      </footer>
    </div>
  );
}

export default Index;
