import Accessibility from '@/components/ui/header/accessibility/accessibility';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof Accessibility> = {
    title: 'Actions/Header/Accessibility',
    component: Accessibility,
    tags: ['autodocs'],
  }
  
export default  meta;
type Story = StoryObj<typeof Accessibility>

export const Component: Story = {
  render: (args) => <div style={{
    display: 'inline-flex',
    backgroundColor: '#313131',
    padding: 24
}}>
      <Accessibility/>
  </div>
}