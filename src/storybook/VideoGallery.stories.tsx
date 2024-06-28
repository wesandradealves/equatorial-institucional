import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import VideoGallery from '@/components/ui/videogallery/VideoGallery'; 

export default {
  title: 'Components/VideoGallery',
  component: VideoGallery,
} as Meta<typeof VideoGallery>;

const Template: StoryFn<typeof VideoGallery> = (args) => <VideoGallery {...args} />;

export const Default = Template.bind({});
Default.args = {
  videos: [
    { title: 'Video 1.1', description: 'Description 1', thumbnailUrl: 'https://via.placeholder.com/150' },
    { title: 'Video 2', description: 'Description 2', thumbnailUrl: 'https://via.placeholder.com/150' },
    { title: 'Video 3', description: 'Description 3', thumbnailUrl: 'https://via.placeholder.com/150' },
  ],
  selectedVideoIndex: 0,
};

export const WithSelectedVideo = Template.bind({});
WithSelectedVideo.args = {
  videos: [
    { title: 'Video 1', description: 'Description 1', thumbnailUrl: 'https://via.placeholder.com/150' },
    { title: 'Video 2', description: 'Description 2', thumbnailUrl: 'https://via.placeholder.com/150' },
    { title: 'Video 3', description: 'Description 3', thumbnailUrl: 'https://via.placeholder.com/150' },
    { title: 'Video 4', description: 'Description 4', thumbnailUrl: 'https://via.placeholder.com/150' },
  ],
  selectedVideoIndex: 3,
};
