import {
  GET_ERR_USER_ID,
  GET_ERR_USER_PASSWORD,
  GET_USER_ID,
  GET_USER_PASSWORD,
} from '../types';

const INITIAL_STATE = {
  userID: '',
  password: '',
  errUserID: '',
  errPassword: '',
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USER_ID:
      return {...state, userID: action.payload};
    case GET_USER_PASSWORD:
      return {...state, password: action.payload};
    case GET_ERR_USER_ID:
      return {...state, errUserID: action.payload};
    case GET_ERR_USER_PASSWORD:
      return {...state, errPassword: action.payload};
    default:
      return state;
  }
}
