import { TopicButton } from '@shared/ui';

import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface TopicsProps {}

export function Topics(props: TopicsProps) {
  return (
    <div className="bg-gray-100 p-20">
      <TopicButton topicName="Next.js" />
    </div>
  );
}

export default Topics;
