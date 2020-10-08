import { UUID } from '../../types';
import { muscleGroupActions } from './actions';
import { ActionType } from 'typesafe-actions';
import { Listable } from '../../abstract/Listable';

export type MuscleGroupState = {
  selected: MuscleGroup;
  // Todo: Id is UUID, would like to make that more explicit
  list: { [id: string]: MuscleGroup };
};

export interface MuscleGroup extends Listable {
  id: UUID;
  name: string;
}

export type muscleGroupActionTypes = ActionType<typeof muscleGroupActions>;
