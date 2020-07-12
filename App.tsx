import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Root } from 'native-base';

import { TabMenu } from './src/navigation/TabMenu/';
import rootReducer from './src/store/rootReducer';

// @TODO: This is to hide a Warning caused by NativeBase after upgrading to RN 0.62
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
]);

const App = (): JSX.Element => {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <Root>
        <TabMenu />
      </Root>
    </Provider>
  );
};

export default App;
