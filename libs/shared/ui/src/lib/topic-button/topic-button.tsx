import styles from './topic-button.module.scss';

export interface TopicButtonProps {
  topicName: string;
  onClick?: () => void;
}

export function TopicButton(props: TopicButtonProps) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
    >
      {props.topicName}
    </button>
  );
}

export default TopicButton;
