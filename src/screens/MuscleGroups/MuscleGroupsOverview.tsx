import React from 'react';
import { AbstractScreenProps } from '../../abstract/ScreenProps';
import { View, ScrollView, StyleSheet } from 'react-native';
import { ListItem, Button, List, Text, Body, Right } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';

import { MUSCLE_GROUP_EDIT } from '../types';
import { rootReducer } from '../../store/rootReducer';
import { IconButton } from '../../components/IconButton/IconButton';
import { remove, select } from '../../store/MuscleGroups/actions';
import { UUID } from '../../types';
import { successToast } from '../../helpers/Toast';

type MuscleGroupsOverviewProps = AbstractScreenProps;

export const MuscleGroupsOverview = (props): JSX.Element => {
  const styles = StyleSheet.create({
    root: {
      display: 'flex',
      height: '100%',
    },
  });

  const dispatch = useDispatch();

  const muscleGroups = useSelector(
    (state: rootReducer) => state.muscleGroups.list,
  );

  const navMusicleGroupdsEdit = () => {
    props.navigation.navigate(MUSCLE_GROUP_EDIT);
  };

  const handleSelect = (id: UUID): void => {
    dispatch(select(id));

    navMusicleGroupdsEdit();
  };

  const handleAddNew = () => {
    dispatch(select(null));

    navMusicleGroupdsEdit();
  };

  const handleDelete = (key: UUID) => {
    dispatch(remove(key));

    // Todo: Add to reducer?
    successToast(props.labels.DELETE_SUCCESS);
  };

  const keys = Object.keys(muscleGroups);

  return (
    <View style={styles.root}>
      <ScrollView>
        {keys.length > 0 ? (
          <List>
            {keys.map((key) => {
              return (
                <ListItem key={key} icon onPress={() => handleSelect(key)}>
                  <Body>
                    <Text>{muscleGroups[key]}</Text>
                  </Body>
                  <Right>
                    <IconButton
                      icon="trash-sharp"
                      color="#CC0000"
                      variant="transparent"
                      onPress={() => handleDelete(key)}
                    />
                  </Right>
                </ListItem>
              );
            })}
          </List>
        ) : (
          <Text>{props.labels.EMPTY_LIST}</Text>
        )}
      </ScrollView>

      <Button onPress={() => handleAddNew()}>
        <Text>{props.labels.ADD}</Text>
      </Button>
    </View>
  );
};

MuscleGroupsOverview.defaultProps = {
  labels: {
    ADD: 'Add new group',
    EMPTY_LIST: 'No muscle groups...',
    DELETE_SUCCESS: 'Successfully deleted muscle group',
  },
};
