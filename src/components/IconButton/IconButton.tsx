import React from 'react';
import { Button } from 'native-base';

import { Icon } from '../Icon';

interface IconButtonProps {
  color?: string;
  disabled?: boolean;
  icon: string;
  variant?: 'filled' | 'outlined' | 'transparent';
  onPress: () => void;
}

export const IconButton = ({
  color,
  disabled,
  icon,
  variant,
  onPress,
}: IconButtonProps): JSX.Element => {
  const outlined = variant === 'outlined';
  const transparent = variant === 'transparent';

  return (
    <Button
      disabled={disabled}
      bordered={outlined}
      transparent={transparent}
      onPress={onPress}>
      <Icon name={icon} color={color} />
    </Button>
  );
};
