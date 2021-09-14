import ActionTypes from '../action-types';
import Action from '../actions/index';

export interface todoState {
  id: number;
  title: string;
  completed: true;
  createdAt: string;
}

const reducer = (state: todoState[], action: Action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_TODO:
      return [...state, action.payload];
  }
};

export default reducer;
