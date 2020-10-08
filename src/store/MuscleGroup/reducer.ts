import { MuscleGroupState, muscleGroupActionTypes } from './types';
import {
  ADD_MUSCLE_GROUP,
  UPDATE_MUSCLE_GROUP,
  REMOVE_MUSCLE_GROUP,
  SELECT_MUSCLE_GROUP,
} from './actions';

const INITIAL_STATE: MuscleGroupState = {
  selected: null,
  list: {},
};

export const muscleGroupReducer = (
  state = INITIAL_STATE,
  action: muscleGroupActionTypes,
): MuscleGroupState => {
  switch (action.type) {
    case ADD_MUSCLE_GROUP:
      return {
        ...state,
        list: {
          ...state.list,
          [action.payload.id]: action.payload,
        },
      };

    case UPDATE_MUSCLE_GROUP:
      return {
        ...state,
        list: {
          ...state.list,
          [action.payload.id]: action.payload,
        },
      };

    // Consider testing how it behaves without the object stread on list
    case REMOVE_MUSCLE_GROUP:
      // eslint-disable-next-line no-case-declarations
      const newState = {
        ...state,
        list: {
          ...state.list,
        },
      };

      delete newState.list[action.payload];

      return newState;

    case SELECT_MUSCLE_GROUP:
      return {
        ...state,
        selected: action.payload !== null ? state.list[action.payload] : null,
      };

    default:
      return state;
  }
};
