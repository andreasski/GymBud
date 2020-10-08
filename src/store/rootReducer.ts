import { combineReducers } from 'redux';

import { muscleGroupReducer } from './MuscleGroup/reducer';
import { MuscleGroupState } from './MuscleGroup/types';
import { ExerciseState } from './Exercise/types';
import { exerciseReducer } from './Exercise/reducer';
import { workoutReducer } from './Workout/reducer';
import { WorkoutState } from './Workout/types';

export interface RootReducer {
  muscleGroup: MuscleGroupState;
  exercise: ExerciseState;
  workout: WorkoutState;
}

export default combineReducers({
  muscleGroup: muscleGroupReducer,
  exercise: exerciseReducer,
  workout: workoutReducer,
});
