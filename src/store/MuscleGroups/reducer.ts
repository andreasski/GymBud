import { MuscleGroupsState, muscleGroupsActions } from './types';
import {
  ADD_MUSCLE_GROUP,
  UPDATE_MUSCLE_GROUP,
  REMOVE_MUSCLE_GROUP,
  SELECT_MUSCLE_GROUP,
} from './actions';
import { generateUUID } from '../../helpers/UUID';

const INITIAL_STATE: MuscleGroupsState = {
  selected: null,
  list: {},
};

export const muscleGroupsReducer = (
  state = INITIAL_STATE,
  action: muscleGroupsActions,
): MuscleGroupsState => {
  switch (action.type) {
    case ADD_MUSCLE_GROUP:
      // eslint-disable-next-line no-case-declarations
      const id = generateUUID();
      console.log({
        ...state,
        list: {
          ...state.list,
          [id]: action.payload,
        },
      });

      return {
        ...state,
        list: {
          ...state.list,
          [id]: action.payload,
        },
      };

    case UPDATE_MUSCLE_GROUP:
      return {
        ...state,
        list: {
          ...state.list,
          [action.payload.id]: action.payload.name,
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
        selected: action.payload,
      };

    default:
      return state;
  }
};
