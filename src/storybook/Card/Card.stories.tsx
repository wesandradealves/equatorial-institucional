import CardBase from '@/components/ui/patterns/card';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof  CardBase> = {
  component: CardBase
}
export default meta;
type Story = StoryObj<typeof CardBase>

export const Primary:Story = {
  args: {
    title: 'Item Title',
    subTitle: 'Item subTitle',
    disable:false
  }
}

export const Disabled:Story = {
  args: {
    title: 'Item Title',
    subTitle: 'Item subTitle',
    disable:true
  }
}
