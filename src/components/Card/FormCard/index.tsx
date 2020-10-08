import React from 'react';

import { Button, Card, TextInput, Text, Surface, Divider } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import { AbstractProps } from '../../../abstract/AbstractProps';
import { DEFAULT_CARD_STYLES } from '../type';

export interface FormCardProps extends AbstractProps {
  title?: string;
  label?: string;
  submitLabel: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
}

export const FormCard = ({
  title,
  label,
  submitLabel,
  placeholder,
  value,
  onChange,
  onSubmit,
}: FormCardProps): JSX.Element => {
  const styles = StyleSheet.create({
    content: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    input: {
      marginRight: 12,
      flex: 1,
    },
  });

  return (
    <Surface style={DEFAULT_CARD_STYLES.root}>
      <Card>
        {!!title && <Card.Title title={<Text>{title}</Text>} />}
        <Card.Content style={styles.content}>
          <TextInput
            style={styles.input}
            label={label}
            placeholder={placeholder}
            value={value}
            onChangeText={(val: string) => onChange(val)}
          />
          <Button mode="contained" onPress={() => onSubmit(value)}>
            {submitLabel}
          </Button>
        </Card.Content>
      </Card>

      <Divider />
    </Surface>
  );
};
