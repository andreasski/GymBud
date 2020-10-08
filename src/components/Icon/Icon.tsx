import React from 'react';
import { Icon as NBIcon } from 'native-base';
import { StyleSheet } from 'react-native';

import { ICON_SIZE, ICON_DEFAULT_COLOR, ICON_DEFALT_SIZE } from './types';

interface IconProps {
  active?: boolean;
  background?: string;
  color?: string;
  name: string;
  size?: 'small' | 'medium' | 'large';
}

export const Icon = ({
  active,
  background,
  color,
  name,
  size,
}: IconProps): JSX.Element => {
  const iconSize = ICON_SIZE[size];

  const styles = StyleSheet.create({
    icon: {
      backgroundColor: background,
      color: color || ICON_DEFAULT_COLOR,
      fontSize: iconSize || ICON_DEFALT_SIZE,
    },
  });

  return <NBIcon active={active ?? true} name={name} style={styles.icon} />;
};
