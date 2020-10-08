import React from 'react';

import { ScrollView, View } from 'react-native';
import { List, Searchbar, Button, Surface, Divider } from 'react-native-paper';

import { KeyboardAwarePadding } from '../../KeyboardAwarePadding/KeyboardAwarePadding';
import { AbstractScreenProps } from '../../../abstract/ScreenProps';
import { Listable } from '../../../abstract/Listable';
import { itemFilter, itemSorter } from '../helpers';
import { UUID } from '../../../types';
import { DEFAULT_FLATLIST_STYLES } from '../types';

interface ToggleFlatListProps extends AbstractScreenProps {
  label: string;
  items: Listable[];
  addedItems: UUID[];
  onPressItem: (id: UUID) => void;
  onClose: (state: boolean) => void;
}

export const ToggleFlatList = ({
  items,
  addedItems,
  labels,
  onPressItem,
  onClose,
}: ToggleFlatListProps): JSX.Element => {
  const [query, setQuery] = React.useState('');

  return (
    <Surface style={DEFAULT_FLATLIST_STYLES.root}>
      <Searchbar
        placeholder={labels.QUERY_PLACEHOLDER}
        value={query}
        onChangeText={(value) => setQuery(value)}
      />
      <ScrollView>
        {items
          .filter((item) => itemFilter(item, query))
          .sort((a, b) => itemSorter(a, b))
          .map((item) => (
            <View key={item.id}>
              <List.Item
                title={item.name}
                left={() =>
                  addedItems.includes(item.id) ? (
                    <List.Icon icon="radiobox-marked" />
                  ) : (
                    <List.Icon icon="radiobox-blank" />
                  )
                }
                onPress={() => onPressItem(item.id)}
              />
              <Divider />
            </View>
          ))}
      </ScrollView>

      <Button mode="contained" onPress={() => onClose(false)}>
        {labels.CLOSE}
      </Button>
    </Surface>
  );
};

ToggleFlatList.defaultProps = {
  labels: {
    QUERY_PLACEHOLDER: 'Search...',
    CLOSE: 'Close',
  },
};
