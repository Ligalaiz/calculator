import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from '../../components/button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    sign: {
      defaultValue: 'Default value',
    }
  }
} as Meta<typeof Button>;

const Template: Story<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  sign: 1
}
