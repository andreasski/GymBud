import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import {
  LandingScreen,
  MuscleGroupOverview,
  MuscleGroupEdit,
  ExerciseOverview,
  ExerciseEdit,
  Workout,
  WorkoutScreenProps,
  ExerciseSet,
} from '../../screens/';

import { HomeStackScreens } from '../../screens/types';
import { UUID } from '../../types';

export type HomeStackParamList = {
  [HomeStackScreens.LANDING_SCREEN]: undefined;
  [HomeStackScreens.MUSCLE_GROUP_OVERVIEW]: undefined;
  [HomeStackScreens.MUSCLE_GROUP_EDIT]: undefined;
  [HomeStackScreens.EXERCISE_OVERVIEW]: undefined;
  [HomeStackScreens.EXERCISE_EDIT]: undefined;
  [HomeStackScreens.WORKOUT_EDIT]: undefined | { name: string };
  [HomeStackScreens.EXERCISE_SET_EDIT]:
    | undefined
    | { exerciseId: UUID; exerciseName: string };
};

export const Home = (): JSX.Element => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName={HomeStackScreens.LANDING_SCREEN}>
      <Stack.Screen name={HomeStackScreens.LANDING_SCREEN} component={LandingScreen} />
      <Stack.Screen
        name={HomeStackScreens.MUSCLE_GROUP_OVERVIEW}
        component={MuscleGroupOverview}
      />
      <Stack.Screen
        name={HomeStackScreens.MUSCLE_GROUP_EDIT}
        component={MuscleGroupEdit}
      />
      <Stack.Screen
        name={HomeStackScreens.EXERCISE_OVERVIEW}
        component={ExerciseOverview}
      />
      <Stack.Screen name={HomeStackScreens.EXERCISE_EDIT} component={ExerciseEdit} />
      <Stack.Screen
        name={HomeStackScreens.WORKOUT_EDIT}
        component={Workout}
        options={({ route }: WorkoutScreenProps) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen name={HomeStackScreens.EXERCISE_SET_EDIT} component={ExerciseSet} />
    </Stack.Navigator>
  );
};
