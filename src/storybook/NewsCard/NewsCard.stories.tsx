import NewsCard from '@/components/ui/patterns/card/news-card/news-card';
import type {Meta, StoryObj} from '@storybook/react';

const imageUrl = './images/equatorial-energia.png';
const imageNews1 = './images/news1.png';

const meta: Meta<typeof NewsCard> = {
    title: 'Patterns/Cards/News Card',
    component: NewsCard,
    tags: ['autodocs'],
  }
  
export default  meta;
type Story = StoryObj<typeof NewsCard>

export const Template: Story = {
  args: {
    title: 'Title',
    body: 'Body',
    mesano: 'Mês Ano',
    imageUrl: imageUrl,
  }
}
/** Exemplo de componente News Card  */
export const Site: Story = {
  args: {
    title: 'Moradores da Ilha do Cajual recebem geladeiras novas da Equatorial Maranhão',
    body: 'A Distribuidora doou 35 geladeiras para as famílias que não possuíam o refrigerador em casa.',
    mesano: 'Fevereiro 2024',
    imageUrl: imageNews1
  },
  render: (args) => <div>
    <NewsCard title={args.title} body={args.body} mesano={args.mesano} imageUrl={args.imageUrl}>
      <div></div>
    </NewsCard>
  </div>
}