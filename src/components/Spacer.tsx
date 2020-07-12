import React from 'react';
import { View } from 'react-native';

const Spacer = (): JSX.Element => {
  const styles = {
    spacer: {
      marginTop: 15,
    },
  };

  return <View style={styles.spacer} />;
};

export default Spacer;
