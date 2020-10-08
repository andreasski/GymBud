import { createAction } from 'typesafe-actions';
import { Workout, Set } from './types';

export const ADD_SET = '[Workout] Add set';
export const ADD_WORKOUT = '[Workout] Add workout';
export const CREATE_WORKOUT = '[Workout] Create workout';
export const REMOVE_SET = '[Workout] Remove set';
export const SELECT_WORKOUT = '[Workout] Remove set';

export const addSet = createAction(ADD_SET)<Set>();
export const addWorkout = createAction(ADD_WORKOUT)<Workout>();
export const createWorkout = createAction(CREATE_WORKOUT)<Workout>();
export const removeSet = createAction(REMOVE_SET)<number>();
export const selectWorkout = createAction(SELECT_WORKOUT)<Workout>();

export const workoutActions = {
  addSet,
  addWorkout,
  createWorkout,
  removeSet,
  selectWorkout,
};
