import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardVideo from '../components/ui/cardvideo/CardVideo';

export default {
  title: 'Components/CardVideo',
  component: CardVideo,
} as ComponentMeta<typeof CardVideo>;

const Template: ComponentStory<typeof CardVideo> = (args) => <CardVideo {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Iluminação Pública",
  description: "Este vídeo mostra informações sobre a iluminação pública.",
  videoUrl: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
  thumbnailUrl: "https://picsum.photos/800/601",
  width: '400px',
  height: '660px'
};

export const EnergySolarYouTube = Template.bind({});
EnergySolarYouTube.args = {
  title: "Aprendendo sobre Energia Solar",
  description: "Um vídeo informativo sobre os benefícios da energia solar.",
  thumbnailUrl: 'https://picsum.photos/800/602',
  iframeUrl: "https://www.youtube.com/embed/K4TOrB7at0Y?si=QiZQZMdQY92HdPHA",
  width: '720px',
  height: '405px'
};

export const EnergySolarVimeo = Template.bind({});
EnergySolarVimeo.args = {
  title: "Aprendendo sobre Energia Solar",
  thumbnailUrl: 'https://picsum.photos/800/603',
  description: "Um vídeo informativo sobre os benefícios da energia solar.",
  iframeUrl: "https://player.vimeo.com/video/929824958?h=3eb6a365ec",
  width: '720px',
  height: '405px'
};

export const IluminacaoPublica = Template.bind({});
IluminacaoPublica.args = {
  title: "Iluminação Pública",
  description: "Este vídeo mostra informações sobre a iluminação pública.",
  videoUrl: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
  thumbnailUrl: "https://picsum.photos/800/604",
  width: '720px',
  height: '405px'
};