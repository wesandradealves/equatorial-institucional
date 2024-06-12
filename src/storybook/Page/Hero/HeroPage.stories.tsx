import Hero from "@/app/pages/hero/hero"
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Hero> = {
    title: 'Page/Hero',
    component: Hero,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Primary:Story = {

}