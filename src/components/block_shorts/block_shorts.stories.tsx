import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import BlockShorts from './block_shorts';

const meta: Meta<typeof BlockShorts> = {
  component: BlockShorts,
};

export default meta;

type Story = StoryObj<typeof BlockShorts>;

export const Basic: Story = {args: {}};
