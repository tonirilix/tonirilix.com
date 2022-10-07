import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import styles from './[slug].module.scss';

/* eslint-disable-next-line */
export interface ArticleProps extends ParsedUrlQuery {
  slug: string;
}

export function Slug(props: ArticleProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Slug {props.slug}!</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params,
}: {
  params: ArticleProps;
}) => {
  return {
    props: {
      slug: params.slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          slug: 'page1',
        },
      },
      {
        params: {
          slug: 'page2',
        },
      },
    ],
  };
};

export default Slug;
