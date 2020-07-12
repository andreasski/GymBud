import { UUID } from '../../types';
import { muscleGroupsActions } from './actions';
import { ActionType } from 'typesafe-actions';

export type MuscleGroupsState = {
  selected: UUID;
  // Todo: Id is UUID, would like to make that more explicit
  list: { [id: string]: string };
};

export interface MuscleGroup {
  id: UUID;
  name: string;
}

export type muscleGroupsActions = ActionType<typeof muscleGroupsActions>;
