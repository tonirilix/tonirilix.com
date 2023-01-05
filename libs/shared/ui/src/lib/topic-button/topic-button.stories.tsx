import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TopicButton } from './topic-button';

export default {
  component: TopicButton,
  title: 'TopicButton',
  argTypes: {
    onClick: {
      action: 'onClick executed',
    },
  },
} as ComponentMeta<typeof TopicButton>;

const Template: ComponentStory<typeof TopicButton> = (args) => (
  <div className="bg-gray-100 p-20">
    <TopicButton {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  topicName: 'Some great topic',
};
