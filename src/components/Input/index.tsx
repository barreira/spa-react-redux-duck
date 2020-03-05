import * as React from 'react';

interface InputProps {
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ title, onChange, value }) => (
  <fieldset>
    <label>
      <div>{title}:</div>
      <input type="text" onChange={onChange} value={value} />
    </label>
  </fieldset>
);

export default Input;
