import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Input, Button, Text, CardItem, Toast } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';

import { AbstractScreenProps } from '../../abstract/ScreenProps';
import { muscleGroupsActions } from '../../store/MuscleGroups/actions';
import { rootReducer } from '../../store/rootReducer';
import { successToast } from '../../helpers/Toast';

type MuscleGroupsEditProps = AbstractScreenProps;

export const MuscleGroupsEdit = (props): JSX.Element => {
  const dispatch = useDispatch();

  const selected = useSelector(
    (state: rootReducer) => state.muscleGroups.selected,
  );

  const muscleGroups = useSelector(
    (state: rootReducer) => state.muscleGroups.list,
  );

  const [muscleGroupName, setMuscleGroupName] = React.useState(
    muscleGroups[selected] ?? '',
  );

  const styles = StyleSheet.create({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      height: '100%',
    },
  });

  const handleSave = (name: string) => {
    if (selected) {
      dispatch(muscleGroupsActions.update({ id: selected, name }));

      successToast(props.labels.UPDATE_SUCCESS);
    } else {
      dispatch(muscleGroupsActions.add(name));
      setMuscleGroupName('');

      successToast(props.labels.ADD_SUCCESS);
    }
  };

  return (
    <View style={styles.root}>
      <Card>
        <CardItem>
          <Input
            label={props.labels.HEADING}
            value={muscleGroupName}
            onChangeText={(value) => setMuscleGroupName(value)}
          />
          <Button onPress={() => handleSave(muscleGroupName)}>
            <Text>{props.labels.SAVE}</Text>
          </Button>
        </CardItem>
      </Card>
    </View>
  );
};

MuscleGroupsEdit.defaultProps = {
  labels: {
    HEADING: 'Name  ',
    SAVE: 'Save',
    ADD_SUCCESS: 'Successfully added a new muscle group',
    UPDATE_SUCCESS: 'Successfully updated the muscle group',
  },
};
