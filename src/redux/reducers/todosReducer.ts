import ActionTypes from '../action-types';
import Action from '../actions/index';

export interface todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
}

export interface todoReducerState {
  todos: todo[];
  loading: boolean;
  error: boolean;
}

const initialState: todoReducerState = {
  todos: [],
  loading: false,
  error: false,
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.LOADING:
      return { ...state, loading: true };
    case ActionTypes.UPDATE_TODO:
      return { ...state, todos: action.payload, loading: false };
    case ActionTypes.ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default reducer;
