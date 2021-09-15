import axios from 'axios';
import { Dispatch } from 'react';
import ActionTypes from '../action-types';
import Action from '../actions';
import { todoReducerState } from '../reducers/todosReducer';

export const addTodoItem = (item: todoReducerState) => {
  return (disptach: Dispatch<Action>) => {
    disptach({
      type: ActionTypes.UPDATE_TODO,
      payload: item,
    });
  };
};

export const getTodoItems = () => {
  return async (disptach: Dispatch<Action>) => {
    disptach({
      type: ActionTypes.LOADING,
    });
    return axios
      .get('/api/todos/')
      .then(({ data }) => {
        disptach({
          type: ActionTypes.UPDATE_TODO,
          payload: data,
        });
      })
      .catch(() => {
        disptach({
          type: ActionTypes.ERROR,
        });
      });
  };
};
