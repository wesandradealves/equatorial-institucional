import type { Meta, StoryObj } from '@storybook/react';
import ButtonIcon from '../components/ui/actions/ButtonIcon';

const meta: Meta<typeof ButtonIcon> = {
  component: ButtonIcon
}

export default  meta;
type Story = StoryObj<typeof  ButtonIcon>

export const Primary:Story = {
  args: {
    variant: 'primary',
    size:'large',
    disabled: false
  }
}
