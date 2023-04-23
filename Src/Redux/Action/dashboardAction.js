import {GET_DOB, GET_GENDER, GET_MODAL_VISIBLE, GET_NAME} from '../types';

export const setName = text => {
  return {type: GET_NAME, payload: text};
};
export const setDob = text => {
  return {type: GET_DOB, payload: text};
};
export const setGender = text => {
  return {type: GET_GENDER, payload: text};
};
export const setModalVisible = text => {
  return {type: GET_MODAL_VISIBLE, payload: text};
};
