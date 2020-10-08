import { UUID } from '../../types';
import { workoutActions } from './actions';
import { ActionType } from 'typesafe-actions';
import { Listable } from '../../abstract/Listable';

export type WorkoutState = {
  currentWorkout: Workout;
  selected: Workout;
  list: { [id: string]: Workout };
};

export interface Set {
  exercise: UUID;
  exerciseName: string;
  reps: number;
  load: number;
}

export interface Workout extends Listable {
  id: UUID;
  name: string;
  sets: Set[];
}

export type workoutActionTypes = ActionType<typeof workoutActions>;
