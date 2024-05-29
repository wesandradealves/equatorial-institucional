import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardFullImage from '../components/ui/cardfullimage/CardFullImage';

export default {
  title: 'Components/CardFullImage',
  component: CardFullImage,
} as ComponentMeta<typeof CardFullImage>;

const Template: ComponentStory<typeof CardFullImage> = (args) => <CardFullImage {...args} />;

export const Default = Template.bind({});
Default.args = {
    images: [
        'https://picsum.photos/800/400',
        'https://picsum.photos/800/401',
        'https://picsum.photos/800/402'
      ],
      label: 'LABEL',
      title: 'Title',
      description: 'This is a description for the card.',
      buttonText: 'Saiba como usar',
      onClick: () => {
        console.log('Button clicked!');
      },
      height: '600px'
};