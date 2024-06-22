import PageProgressTimer from '@/components/ui/navigation/page-progress-timer/page-progress-timer';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PageProgressTimer> = {
  title: 'Navigation/Tab/PageTimer',
  component: PageProgressTimer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageProgressTimer>;

export const Componente: Story = {
  args: {
    total: 5,
    currentIndex: 0,
    timer: 5000,
  },
  render: (args) => (
    <div>
      <PageProgressTimer
        total={args.total}
        currentIndex={args.currentIndex}
        timer={args.timer}
      />
    </div>
  ),
};
