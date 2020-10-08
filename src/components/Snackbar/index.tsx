import * as React from 'react';
import { Snackbar as PaperSnackbar } from 'react-native-paper';
import { AbstractProps } from '../../abstract/AbstractProps';

export interface SnackbarProps extends AbstractProps {
  message: string;
  duration?: number;
  visible: boolean;
  actionLabel?: string;
  setVisible: (visible: boolean) => void;
  onPress?: () => void;
}

export const Snackbar = ({
  message,
  duration,
  visible,
  actionLabel,
  setVisible,
  onPress,
}: SnackbarProps): JSX.Element => {
  const handlePress = () => {
    if (typeof onPress === 'function') {
      onPress();
    }
  };

  const onDismissSnackBar = () => setVisible(false);

  return onPress !== undefined ? (
    <PaperSnackbar
      visible={visible}
      duration={duration || 750}
      onDismiss={onDismissSnackBar}
      action={{
        label: actionLabel,
        onPress: () => {
          handlePress();
        },
      }}>
      {message}
    </PaperSnackbar>
  ) : (
    <PaperSnackbar
      visible={visible}
      duration={duration || 750}
      onDismiss={onDismissSnackBar}>
      {message}
    </PaperSnackbar>
  );
};
