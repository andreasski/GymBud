import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { persistStore, persistReducer } from 'redux-persist';
import { TabMenu } from './src/navigation/TabMenu/';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './src/store/rootReducer';

import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};

const App = (): JSX.Element => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider theme={CombinedDarkTheme}>
          <TabMenu />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
