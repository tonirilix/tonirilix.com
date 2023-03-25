import { AppProps } from 'next/app';
import Head from 'next/head';
import SectionContainer from '../components/SectionContainer';
import './styles.css';
import './prism.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to tonirilix.com!</title>
      </Head>
      <SectionContainer>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </SectionContainer>
    </>
  );
}

export default CustomApp;
