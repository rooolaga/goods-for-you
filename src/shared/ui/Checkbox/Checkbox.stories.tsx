import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Shared/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
 
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const unchecked: Story = {
  args: {
    checked: false,
    label: 'Check me',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Check me',
  },
};