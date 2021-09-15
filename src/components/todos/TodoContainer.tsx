import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators, State } from '../../redux';
import { todoReducerState } from '../../redux/reducers/todosReducer';

const TodoContainer = () => {
  const dispatch = useDispatch();

  const { getTodoItems } = bindActionCreators(ActionCreators, dispatch);

  const state: todoReducerState = useSelector((state: State) => state.todos);

  useEffect(() => {
    getTodoItems();
  }, []);

  console.log(state);

  return (
    <>
      <div className="todo-list" data-testid="todo-list">
        {state.todos.map((todo) =>
          todo.completed === false ? (
            <h1 className="pending-todo-item" key={todo.id}>
              {todo.title}
            </h1>
          ) : (
            <h2 className="completed-todo-item" key={todo.id}>
              {todo.title}
            </h2>
          )
        )}
      </div>
    </>
  );
};

export default TodoContainer;
