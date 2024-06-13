import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PageControl from '@/components/ui/navigation/page-control/page-control';

export default {
  title: 'Components/PageControl',
  component: PageControl,
  argTypes: {
    totalPages: {
      control: {
        type: 'number',
        min: 1,
      },
    },
    currentIndex: {
      control: {
        type: 'number',
        min: 0,
      },
    },
  },
} as Meta;

const Template: StoryFn<{ totalPages: number; currentIndex: number }> = (args) => {
  const [currentIndex, setCurrentIndex] = useState(args.currentIndex);

  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <PageControl
      {...args}
      currentIndex={currentIndex}
      onIndexChange={handleIndexChange}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  totalPages: 10,
  currentIndex: 0,
};
