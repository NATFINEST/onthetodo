import { todo } from '../../redux/reducers/todosReducer';
import './TodoItems.scss';

interface IProps {
  todos: todo[];
  completeTodoItem: (id: number) => void;
  deleteTodoItem: (id: number) => void;
}

const TodoItems = ({ todos, completeTodoItem, deleteTodoItem }: IProps) => {
  return (
    <div className="todo-list" data-testid="todo-list">
      {todos.map((todo) =>
        todo.completed === false ? (
          <div className="todo-item pending" key={todo.id}>
            <h1 className="title">{todo.title}</h1>
            <button
              onClick={() => completeTodoItem(todo.id)}
              aria-label="Mark Todo Item as Completed"
            >
              <i className="fa fa-check" />
            </button>
          </div>
        ) : (
          <div className="todo-item completed" key={todo.id}>
            <h1 className="title">{todo.title}</h1>
            <button
              onClick={() => deleteTodoItem(todo.id)}
              aria-label="Delete Todo Item"
            >
              <i className="fa fa-times" />
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default TodoItems;
