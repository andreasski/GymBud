import React from 'react';

import { View, StyleSheet } from 'react-native';

import { AbstractScreenProps } from '../../abstract/ScreenProps';
import { Listable } from '../../abstract/Listable';
import { Chip } from '../Chip/Chip';
import { UUID } from '../../types';

export interface ChipListProps extends AbstractScreenProps {
  items: Listable[];
  onPress?: (id: UUID) => void;
}

export const ChipList = (props: ChipListProps): JSX.Element => {
  const { items, onPress } = props;

  const styles = StyleSheet.create({
    root: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });

  return (
    <View style={styles.root}>
      {items.length > 0 &&
        items.map((item) => (
          <Chip
            key={item.id}
            chipId={item.id}
            text={item.name}
            icon="close"
            onPress={onPress}
          />
        ))}
    </View>
  );
};
