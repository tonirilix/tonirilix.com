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
    <span
      // href={`/tags/${text}`}
      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {text.split(' ').join('-')}
    </span>
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
        <title>My journey through the code - tonirilix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-6">
        <article className="prose lg:prose-lg mt-6">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hi, I'm <span className="text-sky-500">Jesus Montes</span>
          </h2>
          <p className="prose max-w-none text-gray-500 dark:text-gray-400">
            I write about my experiences in software development.
            <br />
            Sometimes I do experiments on things that nobody else cares about.
          </p>
          <TopicButton>Go to the blog</TopicButton>
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
