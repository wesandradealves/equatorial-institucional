import ServiceCard from '@/components/ui/patterns/card/service-card/service-card';
import type { Meta, StoryObj } from '@storybook/react';

// const imageUrl = './images/equatorial-energia.png';
// const imageNews1 = './images/news1.png';

const meta: Meta<typeof ServiceCard> = {
  title: 'Patterns/Cards/Service Card',
  component: ServiceCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ServiceCard>;

export const Template: Story = {
  args: {},
};
/** Exemplo de componente Service Card, com default Light  */
export const Light: Story = {
  args: {
    title: 'Todos os serviços',
    symbols: 'grid_view',
  },
  render: (args) => (
    <div>
      <ServiceCard title={args.title} symbols={args.symbols} />
    </div>
  ),
};

/** Exemplo de componente Service Card, com default Dark  */
export const Dark: Story = {
  args: {
    title: 'Informar falta de luz',
    theme: 'dark',
    symbols: 'flash_off',
  },
  render: (args) => (
    <div>
      <ServiceCard title={args.title} theme={args.theme} symbols={args.symbols} />
    </div>
  ),
};
