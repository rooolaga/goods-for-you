import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta = {
  title: 'Shared/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
 
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

const children = 'Lorem ipsum dolor sit amet.'

export const H1: Story = {
  args: {
    children,
    as: 'h1'
  }
}

export const H2: Story = {
  args: {
    children,
    as: 'h2'
  }
}

export const H3: Story = {
  args: {
    children,
    as: 'h3'
  }
}

export const H4: Story = {
  args: {
    children,
    as: 'h4'
  }
}


export const Span: Story = {
  args: {
    children,
    as: 'span'
  }
}

export const Paragraph: Story = {
  args: {
    children,
    as: 'p'
  }
}

export const Dark: Story = {
  args: {
    children,
    color: 'dark'
  }
}

export const Gray: Story = {
  args: {
    children,
    color: 'gray'
  }
}

export const White: Story = {
  args: {
    children,
    color: 'white'
  }
}