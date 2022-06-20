import React, { InputHTMLAttributes, ReactNode, useState } from 'react';
import { RiEyeLine } from 'react-icons/ri';
import { RiEyeOffLine } from 'react-icons/ri';

import { Container, Icon, TextEntry } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholderText: string;
  isPassword: boolean;
  icon: ReactNode;
  entryType?: string;
}

export const Input: React.FC<InputProps> = ({
  placeholderText,
  isPassword,
  icon,
  entryType,
  ...rest
}) => {
  const [inputType, setInputType] = useState(isPassword);

  return (
    <Container>
      <Icon visible>{icon}</Icon>
      <TextEntry
        {...rest}
        data-testid="input"
        type={inputType ? 'password' : entryType || 'text'}
        placeholder={placeholderText}
      />
      <Icon
        data-testid="input-type-icon"
        visible={isPassword}
        onClick={() => setInputType(!inputType)}
      >
        {inputType ? <RiEyeLine /> : <RiEyeOffLine />}
      </Icon>
    </Container>
  );
};
