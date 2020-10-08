import React from 'react';

import { useHeaderHeight } from '@react-navigation/stack';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { AbstractProps } from '../../abstract/AbstractProps';

export interface KeyboardAwareContainerProps extends AbstractProps {
  children: JSX.Element;
}

export const KeyboardAwareContainer = (
  props: KeyboardAwareContainerProps,
): JSX.Element => {
  const { children } = props;

  const styles = StyleSheet.create({
    root: {
      flex: 1,
    },
  });

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={useHeaderHeight()}>
      {children}
    </KeyboardAvoidingView>
  );
};
