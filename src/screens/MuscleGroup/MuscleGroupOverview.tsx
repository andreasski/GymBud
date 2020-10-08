import React from 'react';

import { AbstractScreenProps } from '../../abstract/ScreenProps';
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import { useSelector, useDispatch } from 'react-redux';

import { HomeStackScreens } from '../types';
import { RootReducer } from '../../store/rootReducer';
import { UUID } from '../../types';
import { HomeStackParamList } from '../../navigation/StackMenu/Home';

import { removeMuscleGroup, selectMuscleGroup } from '../../store/MuscleGroup/actions';
import { OverviewFlatList } from '../../components/FlatList';
import { removeMuscleGroupReference } from '../../store/Exercise/actions';
import { Snackbar } from '../../components/Snackbar';

export interface MuscleGroupOverviewProps
  extends StackScreenProps<HomeStackParamList, HomeStackScreens.MUSCLE_GROUP_OVERVIEW>,
    AbstractScreenProps {}

export const MuscleGroupOverview = ({
  labels,
  navigation,
}: MuscleGroupOverviewProps): JSX.Element => {
  const dispatch = useDispatch();

  const muscleGroups = useSelector((state: RootReducer) => state.muscleGroup.list);

  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const navMusicleGroupdsEdit = () => {
    navigation.navigate(HomeStackScreens.MUSCLE_GROUP_EDIT);
  };

  const handleSelect = (id: UUID): void => {
    dispatch(selectMuscleGroup(id));

    navMusicleGroupdsEdit();
  };

  const handleAddNew = () => {
    dispatch(selectMuscleGroup(null));

    navMusicleGroupdsEdit();
  };

  const handleDelete = (key: UUID) => {
    dispatch(removeMuscleGroup(key));
    dispatch(removeMuscleGroupReference(key));

    setSnackbarOpen(true);
  };

  const keys = Object.keys(muscleGroups);

  return (
    <>
      <OverviewFlatList
        emptyListPlaceholder={labels.EMPTY_LIST}
        items={keys.map((id: string) => muscleGroups[id])}
        onClose={handleAddNew}
        onDeleteItem={handleDelete}
        onPressItem={handleSelect}
      />
      <Snackbar
        message={labels.DELETE_SUCCESS}
        visible={snackbarOpen}
        setVisible={setSnackbarOpen}
      />
    </>
  );
};

MuscleGroupOverview.defaultProps = {
  labels: {
    EMPTY_LIST: 'No muscle groups...',
    DELETE_SUCCESS: 'Successfully deleted muscle group',
  },
};
