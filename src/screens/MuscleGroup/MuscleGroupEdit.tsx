import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { AbstractScreenProps } from '../../abstract/ScreenProps';
import { RootReducer } from '../../store/rootReducer';

import { updateMuscleGroup, addMuscleGroup } from '../../store/MuscleGroup/actions';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeStackParamList } from '../../navigation/StackMenu/Home';
import { HomeStackScreens } from '../types';
import { FormCard } from '../../components/Card/FormCard';
import { Snackbar } from '../../components/Snackbar';
import { generateUUID } from '../../helpers/UUID';

export interface MuscleGroupEditProps
  extends StackScreenProps<HomeStackParamList, HomeStackScreens.MUSCLE_GROUP_EDIT>,
    AbstractScreenProps {}

export const MuscleGroupEdit = ({ labels }: MuscleGroupEditProps): JSX.Element => {
  const dispatch = useDispatch();

  const selected = useSelector((state: RootReducer) => state.muscleGroup.selected);

  const [name, setName] = React.useState(selected?.name ?? '');
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const styles = StyleSheet.create({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      height: '100%',
    },
  });

  const handleSave = (value: string) => {
    if (selected) {
      dispatch(updateMuscleGroup({ id: selected.id, name: value }));
    } else {
      dispatch(addMuscleGroup({ id: generateUUID(), name: value }));
      setName('');
    }

    setSnackbarOpen(true);
  };

  return (
    <View style={styles.root}>
      <FormCard
        value={name}
        label={labels.LABEL}
        placeholder={labels.PLACEHOLDER_NAME}
        submitLabel={labels.SAVE}
        onChange={setName}
        onSubmit={handleSave}
      />
      <Snackbar
        message={selected ? labels.UPDATE_SUCCESS : labels.ADD_SUCCESS}
        visible={snackbarOpen}
        setVisible={setSnackbarOpen}
      />
    </View>
  );
};

MuscleGroupEdit.defaultProps = {
  labels: {
    LABEL: 'Name',
    PLACEHOLDER_NAME: 'Enter a name...',
    SAVE: 'Save',
    ADD_SUCCESS: 'Successfully added a new muscle group',
    UPDATE_SUCCESS: 'Successfully updated the muscle group',
  },
};
