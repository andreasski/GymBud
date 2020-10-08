import React from 'react';

import { StyleSheet } from 'react-native';
import { AbstractScreenProps } from '../../abstract/ScreenProps';
import { Chip as PaperChip } from 'react-native-paper';

interface FlatListProps extends AbstractScreenProps {
  chipId: string;
  text: string;
  icon?: string;
  onPress?: (id: string) => void;
}

export const Chip = (props: FlatListProps): JSX.Element => {
  const { icon, chipId, text, onPress } = props;

  const handlePress = (id: string) => {
    if (typeof onPress === 'function') {
      onPress(id);
    }
  };

  const styles = StyleSheet.create({
    chip: {
      marginRight: 3,
    },
  });
  return (
    <PaperChip style={styles.chip} icon={icon} onPress={() => handlePress(chipId)}>
      {text}
    </PaperChip>
  );
};
