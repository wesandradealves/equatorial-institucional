// Tab.tsx
import React from 'react';
import './Tab.scss';
import Icon from '@mdi/react'; 

interface TabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  icon?: string;
  size: 'small' | 'medium' | 'large';
}

const Tab: React.FC<TabProps> = ({ label, isActive, onClick, icon, size = 'medium' }) => {
  return (
    <div
      className={`tab tab--${size} ${isActive ? 'tab--selected' : 'tab--normal'}`}
      onClick={onClick}
    >
      {icon && (
        <span className="icon-container">
          <Icon path={icon} size={1} className="icon" />
        </span>
      )}
      
      {label}
    </div>
  );
};

export default Tab;
