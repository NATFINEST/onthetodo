import { todoState } from '../reducers/todoReducer';

type Action = {
  type: string;
  payload: todoState;
};

export default Action;
