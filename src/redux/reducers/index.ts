import { combineReducers } from 'redux';
import todosReducer from './todosReducer';

const reducers = combineReducers({
  todos: todosReducer,
});

export type State = ReturnType<typeof reducers>;

export default reducers;
