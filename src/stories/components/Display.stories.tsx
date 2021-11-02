import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Display } from '../../components/display';
import { PropsDisplay } from '../../interfaces';

const meta: Meta = {
  title: 'Display',
  component: Display,

  argTypes: {
    onClick: {
      action: 'change',
    },
    calculateStr: {
      defaultValue: '7',
    },
  },
};

export default meta;
const Template: Story<PropsDisplay> = (args) => <Display {...args} />;

export const Default = Template.bind({});
Default.args = {
  calculateStr: '2',
  onChange: action('default button'),
};
