import {GET_DOB, GET_GENDER, GET_MODAL_VISIBLE, GET_NAME} from '../types';

const INITIAL_STATE = {
  name: '',
  dob: '',
  gender: '',
  modalVisible: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_NAME:
      return {...state, name: action.payload};
    case GET_DOB:
      return {...state, dob: action.payload};
    case GET_GENDER:
      return {...state, gender: action.payload};
    case GET_MODAL_VISIBLE:
      return {...state, modalVisible: action.payload};
    default:
      return state;
  }
}
