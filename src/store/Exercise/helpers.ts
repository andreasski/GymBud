import { forEach } from 'core-js/fn/array';
import { UUID } from '../../types';
import { ExerciseState } from './types';

// Todo: Clean up garbo
export const removeMuscleGroupReferences = (
  list: ExerciseState['list'],
  muscleGroup: UUID,
): ExerciseState['list'] => {
  const keys = Object.keys(list);
  const newState = { ...list };

  keys.forEach((key) => {
    newState[key].muscleGroup = newState[key].muscleGroup.filter(
      (mg) => mg !== muscleGroup,
    );
  });

  return newState;
};
