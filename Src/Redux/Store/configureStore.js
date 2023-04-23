import {legacy_createStore} from 'redux';
import rootReducer from '../Reducers';

const store = legacy_createStore(rootReducer);

export default store;
