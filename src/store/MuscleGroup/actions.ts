import { createAction } from 'typesafe-actions';
import { MuscleGroup } from './types';
import { UUID } from '../../types';

export const ADD_MUSCLE_GROUP = '[Muscle groups] Add';
export const UPDATE_MUSCLE_GROUP = '[Muscle groups] Update';
export const REMOVE_MUSCLE_GROUP = '[Muscle groups] Remove';
export const SELECT_MUSCLE_GROUP = '[Muscle groups] Select';

export const addMuscleGroup = createAction(ADD_MUSCLE_GROUP)<MuscleGroup>();
export const updateMuscleGroup = createAction(UPDATE_MUSCLE_GROUP)<MuscleGroup>();
export const removeMuscleGroup = createAction(REMOVE_MUSCLE_GROUP)<UUID>();
export const selectMuscleGroup = createAction(SELECT_MUSCLE_GROUP)<UUID>();

export const muscleGroupActions = {
  addMuscleGroup,
  updateMuscleGroup,
  removeMuscleGroup,
  selectMuscleGroup,
};
