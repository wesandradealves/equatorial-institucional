// src/stories/Icons.stories.js
import React from 'react';
import Icon from '@mdi/react';
import * as mdiIcons from '@mdi/js';

export default {
  title: 'Icons',
};

const iconNames = Object.keys(mdiIcons).filter(name => name.startsWith('mdi'));

const Template = (args) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
    {iconNames.map((iconName) => (
      <div key={iconName} style={{ margin: '10px' }}>
        <Icon path={mdiIcons[iconName]} size={1} color="black" />
      </div>
    ))}
  </div>
);

export const AllIcons = Template.bind({});
