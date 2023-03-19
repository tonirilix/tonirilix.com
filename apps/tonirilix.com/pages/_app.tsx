import { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { List } from 'phosphor-react';
import SectionContainer from '../components/SectionContainer';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to tonirilix.com!</title>
      </Head>
      <SectionContainer>
        <nav className="text-primary mx-auto flex max-w-8xl items-center justify-between">
          <div className="flex justify-center gap-4 align-middle">
            <Link
              className="text-primary underlined block whitespace-nowrap text-2xl font-medium transition focus:outline-none"
              href="/"
            >
              <h1>Jesus Montes</h1>
            </Link>
          </div>
          <ul className="hidden lg:flex">
            <li className="px-5 py-2">
              <Link
                className="underlined block whitespace-nowrap text-lg font-medium hover:text-team-current focus:text-team-current focus:outline-none text-secondary"
                href="/blog"
              >
                Blog
              </Link>
            </li>
            <li className="px-5 py-2">
              <Link
                className="underlined block whitespace-nowrap text-lg font-medium hover:text-team-current focus:text-team-current focus:outline-none text-secondary"
                href="/courses"
              >
                Courses
              </Link>
            </li>
            <li className="px-5 py-2">
              <Link
                className="underlined block whitespace-nowrap text-lg font-medium hover:text-team-current focus:text-team-current focus:outline-none text-secondary"
                href="/discord"
              >
                Discord
              </Link>
            </li>
            <li className="px-5 py-2">
              <Link
                className="underlined block whitespace-nowrap text-lg font-medium hover:text-team-current focus:text-team-current focus:outline-none text-secondary"
                href="/chats/04"
              >
                Chats
              </Link>
            </li>
            <li className="px-5 py-2">
              <Link
                className="underlined block whitespace-nowrap text-lg font-medium hover:text-team-current focus:text-team-current focus:outline-none text-secondary"
                href="/calls"
              >
                Calls
              </Link>
            </li>
            <li className="px-5 py-2">
              <Link
                className="underlined block whitespace-nowrap text-lg font-medium hover:text-team-current focus:text-team-current focus:outline-none text-secondary"
                href="/workshops"
              >
                Workshops
              </Link>
            </li>
            <li className="px-5 py-2">
              <Link
                className="underlined block whitespace-nowrap text-lg font-medium hover:text-team-current focus:text-team-current focus:outline-none text-secondary"
                href="/about"
              >
                About
              </Link>
            </li>
          </ul>
          <div className="flex items-center justify-center">
            <div className="block lg:hidden">
              <button
                aria-haspopup="true"
                aria-controls="menu--:r2:"
                className="focus:border-primary hover:border-primary border-secondary text-primary inline-flex h-14 w-14 items-center justify-center rounded-full border-2 p-1 transition focus:outline-none"
                id="menu-button--menu--:r2:"
                type="button"
                data-reach-menu-button=""
              >
                <List size={32} />
              </button>
            </div>
          </div>
        </nav>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </SectionContainer>
    </>
  );
}

export default CustomApp;
