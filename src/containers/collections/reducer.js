import {
  GET_COLLECTIONS_REQUEST,
  GET_COLLECTIONS_SUCCESS,
  GET_COLLECTIONS_FAILURE
} from '../../constants/actionTypes';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COLLECTIONS_REQUEST:
      return {
        ...state,
        collectionsLoading: true,
        collectionsLoaded: false,
        collectionsSuccess: false,
      }
    case GET_COLLECTIONS_SUCCESS:
      return {
        ...state,
        data: action.data,
        colletionsLoading: false,
        colletionsLoaded: true,
        colletionsSuccess: true,
      }
    case GET_COLLECTIONS_FAILURE:
      return {
        ...state,
        collectionsLoading: false,
        collectionsLoaded: true,
        collectionsSuccess: false,
      }
    default:
      return state;
  }
};

export default reducer;