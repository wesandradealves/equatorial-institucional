import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputText, { InputTextProps } from '../components/ui/actions/InputText';

export default {
    title: 'Components/InputText',
    component: InputText,
  } as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Nome:',
  placeholder: 'Enter text...',
};

export const WithValue = Template.bind({});
WithValue.args = {
    label: 'Pre-filled text',
    placeholder: 'Enter text...',
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: '',
    placeholder: 'Cannot type...',
};