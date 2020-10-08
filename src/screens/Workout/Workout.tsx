import React from 'react';

import { StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Surface } from 'react-native-paper';
import { useSelector } from 'react-redux';

import { AbstractScreenProps } from '../../abstract/ScreenProps';
import { HomeStackParamList } from '../../navigation/StackMenu/Home';
import { RootReducer } from '../../store/rootReducer';
import { UUID } from '../../types';
import { HomeStackScreens } from '../types';
import { OverviewFlatList } from '../../components/FlatList';

export interface WorkoutScreenProps
  extends StackScreenProps<HomeStackParamList, HomeStackScreens.WORKOUT_EDIT>,
    AbstractScreenProps {}

export const Workout = ({ navigation }: WorkoutScreenProps): JSX.Element => {
  const [flatListOpen, setFlatListOpen] = React.useState(false);

  const exercises = useSelector((state: RootReducer) => state.exercise.list);
  const currentWorkout = useSelector(
    (state: RootReducer) => state.workout.currentWorkout,
  );

  const navExerciseSet = (exerciseId: UUID, exerciseName: string): void => {
    navigation.navigate(HomeStackScreens.EXERCISE_SET_EDIT, {
      exerciseId: exerciseId,
      exerciseName: exerciseName,
    });
  };

  const handleSelectExercise = (exerciseId: UUID) => {
    navExerciseSet(exerciseId, exercises[exerciseId].name);
  };

  const styles = StyleSheet.create({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
    },
  });

  return !flatListOpen ? (
    <Surface style={styles.root}>
      <Surface>{currentWorkout.sets.map((set) => set.exerciseName)}</Surface>
      <Button onPress={() => setFlatListOpen(true)}>Add exercise!</Button>
    </Surface>
  ) : (
    <OverviewFlatList
      items={Object.keys(exercises).map((key) => exercises[key])}
      closeLabel={'close'}
      onPressItem={handleSelectExercise}
      onClose={() => setFlatListOpen(false)}
    />
  );
};
