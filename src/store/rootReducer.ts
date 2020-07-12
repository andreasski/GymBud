import { combineReducers } from 'redux';

import { muscleGroupsReducer } from './MuscleGroups/reducer';
import { MuscleGroupsState } from './MuscleGroups/types';

export interface rootReducer {
  muscleGroups: MuscleGroupsState;
}

export default combineReducers({
  muscleGroups: muscleGroupsReducer,
});
