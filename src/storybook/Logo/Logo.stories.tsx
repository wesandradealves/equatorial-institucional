import Logo from '../../components/ui/header/logo/logo';
import type { Meta, StoryObj } from '@storybook/react';

const imageLogo = './images/logo-equatorial.png';

const meta: Meta<typeof Logo> = {
  title: 'Actions/Header/Logo',
  component: Logo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Component: Story = {
  render: (args) => (
    <div
      style={{
        display: 'inline-flex',
        backgroundColor: '#313131',
        padding: 24,
      }}
    >
      <Logo />
    </div>
  ),
};
