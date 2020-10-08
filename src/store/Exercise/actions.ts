import { UUID } from '../../types';
import { createAction } from 'typesafe-actions';
import { Exercise } from './types';

export const ADD_EXERCISE = '[Exercise] Add';
export const UPDATE_EXERCISE = '[Exercise] Update';
export const REMOVE_EXERCISE = '[Exercise] Remove';
export const REMOVE_MUSCLE_GROUP_REFERENCE = '[Exercise] Remove muscle group reference';
export const SELECT_EXERCISE = '[Exercise] Select';

export const addExercise = createAction(ADD_EXERCISE)<Exercise>();
export const updateExercise = createAction(UPDATE_EXERCISE)<Exercise>();
export const removeExercise = createAction(REMOVE_EXERCISE)<UUID>();
export const removeMuscleGroupReference = createAction(REMOVE_MUSCLE_GROUP_REFERENCE)<
  UUID
>();
export const selectExercise = createAction(SELECT_EXERCISE)<UUID>();

export const excercisesActions = {
  addExercise,
  updateExercise,
  removeExercise,
  removeMuscleGroupReference,
  selectExercise,
};
