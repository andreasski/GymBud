import React from 'react';
import { ScrollView, View } from 'react-native';

import {
  List,
  Searchbar,
  IconButton,
  Button,
  Surface,
  Text,
  Divider,
} from 'react-native-paper';

import { AbstractScreenProps } from '../../../abstract/ScreenProps';
import { Listable } from '../../../abstract/Listable';
import { itemFilter, itemSorter } from '../helpers';
import { UUID } from '../../../types';
import { DEFAULT_FLATLIST_STYLES } from '../types';

interface OverviewFlatListProps extends AbstractScreenProps {
  items: Listable[];
  emptyListPlaceholder?: string;
  closeLabel?: string;
  onClose: (state: boolean) => void;
  onDeleteItem?: (id: UUID) => void;
  onPressItem: (id: UUID) => void;
}

export const OverviewFlatList = ({
  items,
  emptyListPlaceholder,
  labels,
  closeLabel,
  onClose,
  onDeleteItem,
  onPressItem,
}: OverviewFlatListProps): JSX.Element => {
  const [query, setQuery] = React.useState('');

  return (
    <Surface style={DEFAULT_FLATLIST_STYLES.root}>
      <Searchbar
        placeholder={labels.QUERY_PLACEHOLDER}
        value={query}
        onChangeText={(value) => setQuery(value)}
      />
      <ScrollView>
        {items.length > 0 ? (
          items
            .filter((item) => itemFilter(item, query))
            .sort((a, b) => itemSorter(a, b))
            .map((item) => (
              <View key={item.id}>
                <List.Item
                  title={item.name}
                  right={() =>
                    !!onDeleteItem && (
                      <IconButton icon="delete" onPress={() => onDeleteItem(item.id)} />
                    )
                  }
                  onPress={() => onPressItem(item.id)}
                />
                <Divider />
              </View>
            ))
        ) : (
          <Text>{emptyListPlaceholder}</Text>
        )}
      </ScrollView>

      <Button mode="contained" onPress={() => onClose(false)}>
        {closeLabel || labels.CLOSE}
      </Button>
    </Surface>
  );
};

OverviewFlatList.defaultProps = {
  labels: {
    QUERY_PLACEHOLDER: 'Search...',
    CLOSE: 'Add',
  },
};
