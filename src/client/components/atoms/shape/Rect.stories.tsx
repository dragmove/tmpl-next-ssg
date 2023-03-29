import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Rect, RectProps } from '@client/components/atoms/shape/Rect';

export default {
  title: 'shape/Rect',
  component: Rect,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Rect>;

const Template: ComponentStory<typeof Rect> = (args) => <Rect {...args} />;

export const Base = Template.bind({});

Base.args = {
  width: 100,
  height: 100,
  x: 0,
  y: 0,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
  skewX: 0,
  skewY: 0,
  opacity: 1,
  backgroundColor: '#000',
  radius: 0,
  boxShadow: 'none',
} as RectProps;
