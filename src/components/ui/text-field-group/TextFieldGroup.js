import React from 'react';
import './TextFieldGroup.scss';

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  type,
  onChange,
  disabled,
}) => {
  return (
    <div className="form__group">
      <input
        type={type}
        className="form__control"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default TextFieldGroup;
