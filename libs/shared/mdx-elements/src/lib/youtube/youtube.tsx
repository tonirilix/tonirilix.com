import styles from './youtube.module.scss';

/* eslint-disable-next-line */
export interface YoutubeProps {
  uid: string;
  title: string;
}

export function Youtube(props: YoutubeProps) {
  return (
    <div className={styles['container']}>
      <iframe
        src={`https://youtube.com/embed/${props.uid}`}
        width="100%"
        height="500px"
        title={props.title}
      />
    </div>
  );
}

export default Youtube;
