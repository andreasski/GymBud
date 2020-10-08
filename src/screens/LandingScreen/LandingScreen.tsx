import React from 'react';

import { ScrollView } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeStackParamList } from '../../navigation/StackMenu/Home';

import { AbstractScreenProps } from '../../abstract/ScreenProps';
import { HomeStackScreens } from '../types';
import { FormCard } from '../../components/Card/FormCard';
import { ButtonCard } from '../../components/Card';
import { useDispatch } from 'react-redux';
import { generateUUID } from '../../helpers/UUID';
import { createWorkout } from '../../store/Workout/actions';

export interface LandingScreenProps
  extends StackScreenProps<HomeStackParamList, HomeStackScreens.LANDING_SCREEN>,
    AbstractScreenProps {}

export const LandingScreen = ({
  navigation,
  labels,
}: LandingScreenProps): JSX.Element => {
  const dispatch = useDispatch();

  const [workoutName, setWorkoutName] = React.useState('');

  const navMuscleGroupOverview = () => {
    navigation.navigate(HomeStackScreens.MUSCLE_GROUP_OVERVIEW);
  };

  const navExerciseOverview = () => {
    navigation.navigate(HomeStackScreens.EXERCISE_OVERVIEW);
  };

  const navNewWorkout = () => {
    dispatch(createWorkout({ id: generateUUID(), name: workoutName, sets: [] }));
    navigation.navigate(HomeStackScreens.WORKOUT_EDIT, {
      name: workoutName,
    });
  };

  return (
    <ScrollView>
      <FormCard
        title={labels.WORKOUT_HEADING}
        placeholder={labels.WORKOUT_NAME_PLACEHOLDER}
        submitLabel={labels.CREATE}
        value={workoutName}
        onChange={setWorkoutName}
        onSubmit={navNewWorkout}
      />
      <ButtonCard
        title={labels.EXERCISE_HEADING}
        buttonLabel={labels.MANAGE}
        onPress={navExerciseOverview}
      />

      <ButtonCard
        title={labels.MUSCLE_GROUP_HEADING}
        buttonLabel={labels.MANAGE}
        onPress={navMuscleGroupOverview}
      />
    </ScrollView>
  );
};

LandingScreen.defaultProps = {
  // Todo: add dictionary for reused values, could also add locales
  labels: {
    CREATE: 'Create',
    MANAGE: 'Manage',
    VIEW: 'View',

    EXERCISE_HEADING: 'Exercise',
    HISTORY_HEADING: 'Workout history',
    MUSCLE_GROUP_HEADING: 'Muscle groups',
    WORKOUT_HEADING: 'New workout',
    WORKOUT_NAME_PLACEHOLDER: 'Workout name ...',
  },
};
