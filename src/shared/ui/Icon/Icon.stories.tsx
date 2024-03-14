import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import CheckIcon from "@/shared/assets/icons/check.svg?react";

const meta = {
  title: 'Shared/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
 
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    height: 20,
    width: 20,
    Svg: CheckIcon
  },
};