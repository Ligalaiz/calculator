import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Button } from '../../components/shared/Button';
import { PropsButton } from '../../interfaces/interfaces';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    sign: {
      defaultValue: '7',
    },
  },
};

export default meta;
const Template: Story<PropsButton> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  sign: '2',
  onClick: action('default button'),
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  sign: '2',
  onClick: action('primary button'),
};
