import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ConvenienceAndSecurity from "@/app/pages/convenienceAndSecurity/page";

export default {
    title: 'Pages/ConvenienceAndSecurity',
    component: ConvenienceAndSecurity
} as ComponentMeta<typeof ConvenienceAndSecurity>

const Template: ComponentStory<typeof ConvenienceAndSecurity> = (args) => <ConvenienceAndSecurity {...args} />;

export const Default = Template.bind({});
Default.args = {
    images: [
        'https://picsum.photos/800/400',
        'https://picsum.photos/800/401',
        'https://picsum.photos/800/402'
    ],
    label: 'LABEL',
    title: '',
    description:'Comodidade e segurança: Agora você pode pagar a conta de luz no Pix!',
    buttonText: 'Saiba como usar',
    onClick: () => {
        console.log('Button clicked!');
    },
    height: '600px'
};