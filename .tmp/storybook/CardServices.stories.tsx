import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardServices from '../components/ui/cardservices/CardServices';

export default {
  title: 'Components/CardServices',
  component: CardServices,
} as ComponentMeta<typeof CardServices>;

const Template: ComponentStory<typeof CardServices> = (args) => <CardServices {...args} />;

export const Default = Template.bind({});
Default.args = {
    cover: 'https://picsum.photos/600', // URL da imagem de capa (se necessário)
    title: 'Soluções para o seu sucesso no Mercado Livre de Energia',
    description: 'Empresas que exploram o Mercado Livre de Energia podem contar com nossos serviços exclusivos. Com condições especiais, garantimos a continuidade do seu negócio com fornecimento estável e seguro de...',
    overline: 'OVERLINE',
    buttonText: 'Descubra nossos serviços',
    logo: 'https://picsum.photos/600', // URL do logo
    onClick: () => {
      console.log('Button clicked!');
    },
    closed: false,
    height: '618px'
};