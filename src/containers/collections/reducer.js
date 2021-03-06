import {
  GET_COLLECTIONS_REQUEST,
  GET_COLLECTIONS_SUCCESS,
  GET_COLLECTIONS_FAILURE,
  DECRYPTED_DATA_REQUEST,
  DECRYPTED_DATA_SUCCESS,
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
        collectionsLoading: false,
        collectionsLoaded: true,
        collectionsSuccess: true,
      }
    case GET_COLLECTIONS_FAILURE:
      return {
        ...state,
        collectionsLoading: false,
        collectionsLoaded: true,
        collectionsSuccess: false,
      }
    case DECRYPTED_DATA_SUCCESS:
      return {
        ...state,
        decryptedData: true,
        decryptedDataSet: action.data,
      }
    default:
      return state;
  }
};

export default reducer;