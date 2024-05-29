import PageControl from '@/components/ui/navigation/page-control/page-control';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PageControl> = {
  title: 'Navigation/Tab/PageControl',
  component: PageControl,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageControl>;

export const Componente: Story = {
  render: (args) => (
    <div>
      <PageControl currentIndex={0} total={5} />
    </div>
  ),
};
