import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import example from './reducers/example';
import example2 from './reducers/example2';

export default combineReducers({example, example2, routing: routerReducer})
