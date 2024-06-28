import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Carousel, { VideoItem } from '@/components/ui/carousel/Carousel';

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as Meta<typeof Carousel>;

const Template: StoryFn<typeof Carousel> = (args) => <Carousel {...args} />;

export const Default = Template.bind({});

Default.args = {
    title: "Dicas de economia e facilide pra te ajudar!",
  videos: [
    {
        title: "Iluminação Pública",
        description: "Este vídeo mostra informações sobre a iluminação pública.",
        videoUrl: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
        thumbnailUrl: "https://picsum.photos/800/601"
    },
    {
        title: "Aprendendo sobre Energia Solar",
        thumbnailUrl: 'https://picsum.photos/800/603',
        description: "Um vídeo informativo sobre os benefícios da energia solar.",
        iframeUrl: "https://player.vimeo.com/video/929824958?h=3eb6a365ec",
        
    },
    {
        title: "Iluminação Pública",
        description: "Este vídeo mostra informações sobre a iluminação pública.",
        videoUrl: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
        thumbnailUrl: "https://picsum.photos/800/604",
  
    },
  ],
};

Default.decorators = [
  (StoryFn, context) => (
    <div style={{ padding: '20px' }}>
      <StoryFn {...context.args} />
    </div>
  ),
];

