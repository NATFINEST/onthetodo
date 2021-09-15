import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators, State } from '../../redux';
import { todoReducerState } from '../../redux/reducers/todosReducer';

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
        <p>Loading...</p>
      ) : (
        <div className="todo-list" data-testid="todo-list">
          {state.todos.map((todo) =>
            todo.completed === false ? (
              <div className="pending-todo-item" key={todo.id}>
                <h1 className="title">{todo.title}</h1>
                <button onClick={() => makeTodoItemCompleted(todo.id)}>
                  Mark as done
                </button>
              </div>
            ) : (
              <div className="completed-todo-item" key={todo.id}>
                <h1 className="title">{todo.title}</h1>
                <button onClick={() => deleteTodoItem(todo.id)}>Delete</button>
              </div>
            )
          )}
        </div>
      )}
    </>
  );
};

export default TodoContainer;
