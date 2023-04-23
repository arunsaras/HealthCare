import {combineReducers} from 'redux';
import loginReducer from '../Reducers/loginReducer';
import dashboardReducer from '../Reducers/dashboardReducer';
const rootReducer = combineReducers({
  //By defining a field inside the reducers parameter
  Login: loginReducer,
  Dashboard: dashboardReducer,
});

export default rootReducer;
