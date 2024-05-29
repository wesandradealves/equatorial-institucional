import type { Meta, StoryObj } from '@storybook/react';
import Collapse from '../../components/ui/inputs/Collapse';

const meta: Meta<typeof Collapse> = {
  component: Collapse
}
export default meta;
type Story = StoryObj<typeof Collapse>

export const NoBox:Story = {
  args: {
    title: 'Text line',
    description: 'Lorem ipsum é uma linguagem utilizada para complementar um texto',
    box:false
  }
}

export const Box:Story = {
  args: {
    title: 'Text line',
    description: 'Lorem ipsum é uma linguagem utilizada para complementar um texto',
    box: true
  }
}
