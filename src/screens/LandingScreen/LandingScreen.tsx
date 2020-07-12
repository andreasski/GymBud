import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Card, Input, CardItem, Text, H3 } from 'native-base';

import { AbstractScreenProps } from '../../abstract/ScreenProps';
import { MUSCLE_GROUP_OVERVIEW } from '../types';

type LandingScreenProps = AbstractScreenProps;

export const LandingScreen = (props): JSX.Element => {
  const styles = StyleSheet.create({
    minimalCards: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

  const navMuscleGroupsOverview = () => {
    props.navigation.navigate(MUSCLE_GROUP_OVERVIEW);
  };

  return (
    <ScrollView>
      <Card>
        <CardItem header bordered>
          <H3>{props.labels.WORKOUT_HEADING}</H3>
        </CardItem>
        <CardItem>
          <Input placeholder={props.labels.WORKOUT_NAME_PLACEHOLDER} />
          <Button>
            <Text>{props.labels.CREATE}</Text>
          </Button>
        </CardItem>
      </Card>

      <Card>
        <CardItem style={styles.minimalCards}>
          <Text>{props.labels.HISTORY_HEADING}</Text>
          <Button>
            <Text>{props.labels.VIEW}</Text>
          </Button>
        </CardItem>
      </Card>

      <Card>
        <CardItem style={styles.minimalCards}>
          <Text>{props.labels.EXERCISE_HEADING}</Text>
          <Button>
            <Text>{props.labels.MANAGE}</Text>
          </Button>
        </CardItem>
      </Card>

      <Card>
        <CardItem style={styles.minimalCards}>
          <Text>{props.labels.MUSCLE_GROUP_HEADING}</Text>
          <Button onPress={navMuscleGroupsOverview}>
            <Text>{props.labels.MANAGE}</Text>
          </Button>
        </CardItem>
      </Card>
    </ScrollView>
  );
};

LandingScreen.defaultProps = {
  // Todo: add dictionary for reused values, could also add locales
  labels: {
    CREATE: 'Create',
    MANAGE: 'Manage',
    VIEW: 'View',

    EXERCISE_HEADING: 'Exercises',
    HISTORY_HEADING: 'Workout history',
    MUSCLE_GROUP_HEADING: 'Muscle groups',
    WORKOUT_HEADING: 'New workout',
    WORKOUT_NAME_PLACEHOLDER: 'Workout name ...',
  },
};
