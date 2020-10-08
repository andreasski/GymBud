import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Surface, Text } from 'react-native-paper';
import { AbstractScreenProps } from '../../abstract/ScreenProps';
import { HomeStackParamList } from '../../navigation/StackMenu/Home';
import { HomeStackScreens } from '../types';

export interface ExerciseSetScreenProps
  extends StackScreenProps<HomeStackParamList, HomeStackScreens.EXERCISE_SET_EDIT>,
    AbstractScreenProps {}

export const ExerciseSet = ({ route }: ExerciseSetScreenProps): JSX.Element => {
  return (
    <Surface>
      <Text>{route.params.exerciseId}</Text>
      <Text>{route.params.exerciseName}</Text>
    </Surface>
  );
};
