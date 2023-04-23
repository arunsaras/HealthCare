import {
  GET_ERR_USER_ID,
  GET_ERR_USER_PASSWORD,
  GET_USER_ID,
  GET_USER_PASSWORD,
} from '../types';

export const setUserID = text => {
  return {type: GET_USER_ID, payload: text};
};
export const setUserPassword = text => {
  return {type: GET_USER_PASSWORD, payload: text};
};
export const setErrUserName = text => {
  return {type: GET_ERR_USER_ID, payload: text};
};
export const setErrUserPassword = text => {
  return {type: GET_ERR_USER_PASSWORD, payload: text};
};
