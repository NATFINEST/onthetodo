import ActionTypes from '../action-types';
import { todoReducerState } from '../reducers/todosReducer';

interface loadingAction {
  type: ActionTypes.LOADING;
}
interface updateTodoAction {
  type: ActionTypes.UPDATE_TODO;
  payload: todoReducerState;
}
interface errorAction {
  type: ActionTypes.ERROR;
}

type Action = loadingAction | updateTodoAction | errorAction;

export default Action;
