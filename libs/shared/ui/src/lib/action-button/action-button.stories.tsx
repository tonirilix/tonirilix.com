import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ActionButton } from './action-button';

export default {
  component: ActionButton,
  title: 'ActionButton',
  argTypes: {
    onClick: {
      action: 'onClick executed',
    },
  },
} as ComponentMeta<typeof ActionButton>;

const Template: ComponentStory<typeof ActionButton> = (args) => (
  <div className="bg-gray-100 p-20">
    <ActionButton {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Some great topic',
};
