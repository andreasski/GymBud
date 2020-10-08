import React from 'react';

import { Card, Divider, Surface } from 'react-native-paper';

import { AbstractProps } from '../../../abstract/AbstractProps';
import { TextArea } from '../../TextArea/TextArea';
import { DEFAULT_CARD_STYLES } from '../type';

export interface TextAreaCardProps extends AbstractProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export const TextAreaCard = ({
  label,
  placeholder,
  value,
  onChange,
}: TextAreaCardProps): JSX.Element => {
  return (
    <Surface style={DEFAULT_CARD_STYLES.root}>
      <Card>
        <Card.Content>
          <TextArea
            label={label}
            placeholder={placeholder}
            value={value}
            onChange={(val: string) => onChange(val)}
          />
        </Card.Content>
      </Card>

      <Divider />
    </Surface>
  );
};
