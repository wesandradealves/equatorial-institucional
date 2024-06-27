import TextLink from '@/components/ui/header/text-link/text-link';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextLink> = {
  title: 'Actions/Header/TextLink',
  component: TextLink,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextLink>;

export const Default: Story = {
  render: (args) => (
    <div
      style={{
        display: 'inline-flex',
        backgroundColor: '#313131',
        padding: 24,
      }}
    >
      <TextLink label="Text Link" url='https://nextjs.org/' />
    </div>
  ),
};

export const TextLinkLeft: Story = {
  args: {
    label: 'Icone na Esquerda',
    url: 'https://nextjs.org/',
    icon: 'add_circle',
    position: 'left',
  },

  render: (args) => (
    <div
      style={{
        display: 'inline-flex',
        backgroundColor: '#313131',
        padding: 24,
      }}
    >
      <TextLink
        label={args.label}
        url={args.url}
        icon={args.icon}
        position={args.position}
      />
    </div>
  ),
};

export const TextLinkRight: Story = {
  args: {
    label: 'Icone na Direita',
    url: 'https://nextjs.org/',
    icon: 'add_circle',
    position: 'right',
  },
  render: (args) => (
    <div
      style={{
        display: 'inline-flex',
        backgroundColor: '#313131',
        padding: 24,
      }}
    >
      <TextLink
        label={args.label}
        url={args.url}
        icon={args.icon}
        position={args.position}
      />
    </div>
  ),
};
