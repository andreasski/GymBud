import { exerciseActionTypes, ExerciseState } from './types';

import {
  ADD_EXERCISE,
  UPDATE_EXERCISE,
  REMOVE_EXERCISE,
  REMOVE_MUSCLE_GROUP_REFERENCE,
  SELECT_EXERCISE,
} from './actions';
import { removeMuscleGroupReferences } from './helpers';

const INITIAL_STATE: ExerciseState = {
  selected: null,
  list: {},
};

export const exerciseReducer = (
  state = INITIAL_STATE,
  action: exerciseActionTypes,
): ExerciseState => {
  switch (action.type) {
    case ADD_EXERCISE:
      return {
        ...state,
        list: {
          ...state.list,
          [action.payload.id]: action.payload,
        },
      };

    case UPDATE_EXERCISE:
      return {
        ...state,
        list: {
          ...state.list,
          [action.payload.id]: action.payload,
        },
      };

    case REMOVE_EXERCISE:
      // eslint-disable-next-line no-case-declarations
      const newState = {
        ...state,
        list: {
          ...state.list,
        },
      };

      delete newState.list[action.payload];

      return newState;

    case REMOVE_MUSCLE_GROUP_REFERENCE:
      return {
        ...state,
        list: removeMuscleGroupReferences(state.list, action.payload),
      };

    case SELECT_EXERCISE:
      return {
        ...state,
        list: {
          ...state.list,
        },
        selected: action.payload !== null ? state.list[action.payload] : null,
      };

    default:
      return state;
  }
};
