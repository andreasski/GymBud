import { useHeaderHeight } from '@react-navigation/stack';
import React from 'react';
import { View, StyleSheet } from 'react-native';

export const KeyboardAwarePadding = (): JSX.Element => {
  const styles = StyleSheet.create({
    keyboardAwarePadding: {
      marginTop: useHeaderHeight(),
      flex: 1,
    },
  });

  return <View style={styles.keyboardAwarePadding} />;
};
