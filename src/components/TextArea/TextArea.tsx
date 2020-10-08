import React from 'react';

import { TextInput } from 'react-native-paper';
import { AbstractProps } from '../../abstract/AbstractProps';
import { DEFAULT_TEXT_AREA_LINES } from './types';

export interface TextAreaProps extends AbstractProps {
  label: string;
  lines?: number;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export const TextArea = ({
  label,
  lines,
  value,
  placeholder,
  onChange,
}: TextAreaProps): JSX.Element => {
  return (
    <TextInput
      label={label}
      numberOfLines={lines ?? DEFAULT_TEXT_AREA_LINES}
      multiline
      value={value}
      placeholder={placeholder}
      onChangeText={(input) => {
        onChange(input);
      }}
    />
  );
};
