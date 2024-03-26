import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
 
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button'
  },
};

export const Dark: Story = {
  args: {
    variant: 'dark',
    children: 'Button'
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button'
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Button'
  },
};

export const Medium: Story = {
  args: {
    size: 'm',
    children: 'Button'
  },
};


export const Small: Story = {
  args: {
    size: 's',
    children: 'Button'
  },
};

export const Large: Story = {
  args: {
    size: 'l',
    children: 'Button'
  },
};