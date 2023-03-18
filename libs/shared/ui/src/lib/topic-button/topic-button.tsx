import styles from './topic-button.module.scss';

export interface TopicButtonProps {
  children: string;
  onClick?: () => void;
}

export function TopicButton({ children, onClick }: TopicButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
    >
      {children}
    </button>
  );
}

export default TopicButton;
