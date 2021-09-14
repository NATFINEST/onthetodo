import { Dispatch } from 'react';
import ActionTypes from '../action-types';
import Action from '../actions';
import { todoState } from '../reducers/todoReducer';

export const addTodoItem = (item: todoState) => {
  return (disptach: Dispatch<Action>) => {
    disptach({
      type: ActionTypes.UPDATE_TODO,
      payload: item,
    });
  };
};
