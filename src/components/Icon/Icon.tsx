import React from 'react';
import { Icon as NBIcon } from 'native-base';
import { StyleSheet } from 'react-native';

import { ICON_SIZE, ICON_DEFAULT_COLOR, ICON_DEFALT_SIZE } from './types';

interface IconProps {
  active?: boolean;
  color?: string;
  name: string;
  size?: 'small' | 'medium' | 'large';
}

export const Icon = ({ active, color, name, size }: IconProps): JSX.Element => {
  const iconSize = ICON_SIZE[size];

  console.log(active);

  const styles = StyleSheet.create({
    icon: {
      color: color || ICON_DEFAULT_COLOR,
      fontSize: iconSize || ICON_DEFALT_SIZE,
    },
  });

  return <NBIcon active={active ?? true} name={name} style={styles.icon} />;
};
