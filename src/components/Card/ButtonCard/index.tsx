import React from 'react';

import { Button, Card, Title, Surface, Divider } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import { AbstractProps } from '../../../abstract/AbstractProps';
import { DEFAULT_CARD_STYLES } from '../type';

export interface ButtonCardProps extends AbstractProps {
  title?: string;
  buttonLabel: string;
  onPress: () => void;
}

export const ButtonCard = ({
  title,
  buttonLabel,
  onPress,
}: ButtonCardProps): JSX.Element => {
  const styles = StyleSheet.create({
    content: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });

  return (
    <Surface style={DEFAULT_CARD_STYLES.root}>
      <Card>
        <Card.Content style={styles.content}>
          <Title>{title}</Title>
          <Button mode="contained" onPress={() => onPress()}>
            {buttonLabel}
          </Button>
        </Card.Content>
      </Card>

      <Divider />
    </Surface>
  );
};
