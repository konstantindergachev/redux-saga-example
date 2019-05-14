import { TYPES } from '../actions/types';
const initialState = {
  users: [],
  user: {},
  error: '',
};

export default function (state= initialState, action){
  switch (action.type) {
    case TYPES.USERS_FETCHED_ASYNC:
      return {
        ...state,
        users: action.payload,
      }
    case TYPES.USER_FETCHED_ASYNC:
      return {
        ...state,
        user: action.payload,
      }
    case TYPES.CREATE_USER_ASYNC:
      return {
        ...state,
        user: action.payload,
      }
    case TYPES.DELETE_USER_ASYNC:
      return {
        ...state,
        user: action.payload,
      }
    case TYPES.ERROR:
      return {
        ...state,
        error: action.error,
      }
  
    default:
      return state;
  }
}