import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LandingScreen } from '../../screens/LandingScreen';
import { MuscleGroupsOverview } from '../../screens/MuscleGroups';
import { MuscleGroupsEdit } from '../../screens/MuscleGroups/MuscleGroupsEdit';
import { MUSCLE_GROUP_OVERVIEW, MUSCLE_GROUP_EDIT } from '../../screens/types';

export const Home = (): JSX.Element => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={LandingScreen} />
      <Stack.Screen
        name={MUSCLE_GROUP_OVERVIEW}
        component={MuscleGroupsOverview}
      />
      <Stack.Screen name={MUSCLE_GROUP_EDIT} component={MuscleGroupsEdit} />
    </Stack.Navigator>
  );
};
