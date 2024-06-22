import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TabList from '../components/ui/tab/TabList';
import { mdiLightbulbOutline, mdiAccountBadge } from '@mdi/js';

export default {
  title: 'Components/TabList',
  component: TabList,
} as ComponentMeta<typeof TabList>;

const Template: ComponentStory<typeof TabList> = (args) => <TabList {...args} />;

export const Default = Template.bind({});
Default.args = {
    orientation:"vertical",
    size:"small",
    tabs:[
      { label: 'Text line 1', icon: mdiLightbulbOutline },
      { label: 'Text line 2', icon: mdiLightbulbOutline },
      { label: 'Text line 3', icon: mdiLightbulbOutline }
    ],
};