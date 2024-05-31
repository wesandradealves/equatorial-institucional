import React from 'react';
import Icon from '@mdi/react';
import { mdiCheck, mdiCloseThick } from '@mdi/js';
import './InputText.scss';

export interface InputTextProps {
  label: string;
  placeholder?: string;
  errorMessage?: string;
  successMessage?: string;
}

const InputText: React.FC<InputTextProps> = ({ label, placeholder, errorMessage, successMessage }) => {
  return (
    <div className="input-text">
      <label className="label-text">{label}</label>
      <div className={`input-container ${errorMessage ? 'has-error' : ''}`}>
        <input
          type="text"
          className="text-input"
          placeholder={placeholder}
          defaultValue=""
        />
        {errorMessage && (
          <Icon
            path={mdiCloseThick}
            className="error-icon"
            size={1}
          />
        )}
        {successMessage && (
          <Icon
            path={mdiCheck}
            className="success-icon"
            size={1}
            
          />
        )}
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default InputText;
