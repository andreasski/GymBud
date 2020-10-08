import React from 'react';

import { StyleSheet } from 'react-native';
import { Card, IconButton, Title, Text, Surface, Divider } from 'react-native-paper';

import { AbstractProps } from '../../../abstract/AbstractProps';
import { Listable } from '../../../abstract/Listable';
import { ChipList } from '../../ChipList/ChipList';
import { DEFAULT_CARD_STYLES } from '../type';

export interface ChipListCardProps extends AbstractProps {
  label: string;
  items: Listable[];
  listPlaceholder: string;
  onPressEdit: () => void;
  onPressChip: (value: string) => void;
}

export const ChipListCard = ({
  label,
  items,
  listPlaceholder,
  onPressEdit,
  onPressChip,
}: ChipListCardProps): JSX.Element => {
  const styles = StyleSheet.create({
    content: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

  return (
    <Surface style={DEFAULT_CARD_STYLES.root}>
      <Card>
        <Card.Content style={styles.content}>
          <Title>{label}</Title>
          <IconButton
            icon={items?.length > 0 ? 'pencil' : 'plus'}
            onPress={() => onPressEdit()}
          />
        </Card.Content>
        <Card.Content>
          {items.length === 0 ? (
            <Text>{listPlaceholder}</Text>
          ) : (
            <ChipList items={items} onPress={onPressChip} />
          )}
        </Card.Content>
      </Card>

      <Divider />
    </Surface>
  );
};
