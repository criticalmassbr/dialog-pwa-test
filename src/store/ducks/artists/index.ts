import { Reducer } from 'redux';
import { ArtistsState, ArtistsTypes } from './types';

const INITIAL_STATE: ArtistsState = {
  data: null,
  error: false,
  loading: false,
};

const reducer: Reducer<ArtistsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ArtistsTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ArtistsTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case ArtistsTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: null,
      };
    default:
      return state;
  }
};

export default reducer;
