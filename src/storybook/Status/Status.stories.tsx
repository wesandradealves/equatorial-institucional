import Status from '@/components/ui/header/status/status';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Status> = {
  title: 'Actions/Header/Status',
  component: Status,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Status>;

export const Component: Story = {
  render: (args) => (
    <div
      style={{
        display: 'inline-flex',
        backgroundColor: '#313131',
        padding: 24,
      }}
    >
      <Status />
    </div>
  ),
};
