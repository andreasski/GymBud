import React from 'react';
import { Card, Divider, Surface, TextInput } from 'react-native-paper';
import { AbstractProps } from '../../../abstract/AbstractProps';
import { DEFAULT_CARD_STYLES } from '../type';

export interface TextInputCardProps extends AbstractProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export const TextInputCard = ({
  label,
  placeholder,
  value,
  onChange,
}: TextInputCardProps): JSX.Element => {
  return (
    <Surface style={DEFAULT_CARD_STYLES.root}>
      <Card>
        <Card.Content>
          <TextInput
            label={label}
            placeholder={placeholder}
            value={value}
            onChangeText={(val: string) => onChange(val)}
          />
        </Card.Content>
      </Card>

      <Divider />
    </Surface>
  );
};
