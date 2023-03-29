import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GoTopButton } from '@client/components/atoms/button/GoTopButton';

export default {
  title: 'button/GoTopButton',
  component: GoTopButton,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof GoTopButton>;

const Template: ComponentStory<typeof GoTopButton> = (args) => (
  <GoTopButton {...args} />
);

export const Base = Template.bind({});

Base.args = {
  title: 'Go Top',
  isVisible: true,
};
