import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators, State } from '../../redux';
import { todoReducerState } from '../../redux/reducers/todosReducer';
import TodoItems from './TodoItems';

const TodoContainer = () => {
  const dispatch = useDispatch();

  const { deleteTodoItem, makeTodoItemCompleted, getTodoItems } =
    bindActionCreators(ActionCreators, dispatch);

  const state: todoReducerState = useSelector((state: State) => state.todos);

  // Sort by completed status
  state.todos.sort(function (a, b) {
    var nameA = a.completed;
    var nameB = b.completed;

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });

  useEffect(() => {
    getTodoItems();
  }, []);

  return (
    <>
      {state.loading ? (
        <i className="fas fa-spinner fa-spin fa-2x" />
      ) : (
        <TodoItems
          todos={state.todos}
          completeTodoItem={makeTodoItemCompleted}
          deleteTodoItem={deleteTodoItem}
        />
      )}
    </>
  );
};

export default TodoContainer;
