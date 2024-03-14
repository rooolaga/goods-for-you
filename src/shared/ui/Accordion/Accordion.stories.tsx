import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import { Text } from '../Text'

const meta = {
  title: 'Shared/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
 
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    title: 'Question 1',
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Animi cupiditate natus voluptates odio velit accusantium minus 
      illo sunt consequuntur placeat.`
  },
};