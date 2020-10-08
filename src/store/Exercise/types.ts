import { ActionType } from 'typesafe-actions';
import { Listable } from '../../abstract/Listable';

import { UUID } from '../../types';
import { excercisesActions } from './actions';

// Todo: Consider adding the Id to the Exercise type. Might be nice to have
export interface Exercise extends Listable {
  id: UUID;
  name: string;
  description: string;
  // Todo: Add a new type muscleGroupId=UUID?
  muscleGroup: UUID[];
}

export type ExerciseState = {
  selected: Exercise;
  // Todo: Id is UUID, would like to make that more explicit
  list: { [id: string]: Exercise };
};

export type exerciseActionTypes = ActionType<typeof excercisesActions>;
