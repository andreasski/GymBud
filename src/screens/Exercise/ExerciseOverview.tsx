import React from 'react';

import { StackScreenProps } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';

import { AbstractScreenProps } from '../../abstract/ScreenProps';
import { removeExercise, selectExercise } from '../../store/Exercise/actions';
import { UUID } from '../../types';
import { RootReducer } from '../../store/rootReducer';
import { HomeStackParamList } from '../../navigation/StackMenu/Home';
import { OverviewFlatList } from '../../components/FlatList';
import { HomeStackScreens } from '../types';
import { Snackbar } from '../../components/Snackbar';

export interface ExerciseOverviewProps
  extends StackScreenProps<HomeStackParamList, HomeStackScreens.EXERCISE_OVERVIEW>,
    AbstractScreenProps {}

export const ExerciseOverview = ({
  navigation,
  labels,
}: ExerciseOverviewProps): JSX.Element => {
  const dispatch = useDispatch();

  const exercises = useSelector((state: RootReducer) => state.exercise.list);

  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const navExerciseEdit = () => {
    navigation.navigate(HomeStackScreens.EXERCISE_EDIT);
  };

  const handleSelect = (id: UUID): void => {
    dispatch(selectExercise(id));

    navExerciseEdit();
  };

  const handleAddNew = () => {
    dispatch(selectExercise(null));

    navExerciseEdit();
  };

  const handleDelete = (id: UUID) => {
    dispatch(removeExercise(id));
    setSnackbarOpen(true);
  };

  const keys = Object.keys(exercises);

  return (
    <>
      <OverviewFlatList
        emptyListPlaceholder={labels.EMPTY_LIST}
        items={keys.map((key) => exercises[key])}
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

ExerciseOverview.defaultProps = {
  labels: {
    ADD: 'Add new exercise',
    EMPTY_LIST: 'No exercises...',
    DELETE_SUCCESS: 'Successfully deleted exercise',
  },
};
