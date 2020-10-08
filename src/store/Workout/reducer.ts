import { workoutActionTypes, WorkoutState } from './types';
import { CREATE_WORKOUT } from './actions';

const INITIAL_STATE: WorkoutState = {
  currentWorkout: null,
  selected: null,
  list: {},
};

export const workoutReducer = (
  state = INITIAL_STATE,
  action: workoutActionTypes,
): WorkoutState => {
  switch (action.type) {
    case CREATE_WORKOUT:
      return {
        ...state,
        // I think this makes sense, you should probably not be able to have a selected
        // and an active workout at the same time.
        selected: null,
        currentWorkout: action.payload,
      };

    default:
      return state;
  }
};
