"use client";

import React, { useState } from 'react';
import Tab from './Tab';
import './TabList.scss';

interface Tab {
  label: string;
  icon?: string;
  size?: 'small' | 'large';
}

interface TabListProps {
  orientation: 'horizontal' | 'vertical';
  size: 'small' | 'large';
  tabs: Tab[];
}

const TabList: React.FC<TabListProps> = ({ orientation, size, tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`tab-list ${orientation}`}>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          isActive={activeIndex === index}
          onClick={() => setActiveIndex(index)}
          icon={tab.icon}
          size={size}
        />
      ))}
    </div>
  );
};

export default TabList;
