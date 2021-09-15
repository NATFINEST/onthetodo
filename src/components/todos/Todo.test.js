import { render } from '@testing-library/react';
import TodoContainer from './TodoContainer';

describe('Todo List', () => {
  it('should show a list of pending todos', () => {
    const { container } = render(<TodoContainer />);
    const pendingTodos = container.querySelectorAll('.pending-todo-item');
    expect(pendingTodos).toHaveLength(2);
  });

  it('should show a list of completed todos', () => {
    const { container } = render(<TodoContainer />);
    const completedTodos = container.querySelectorAll('.completed-todo-item');
    expect(completedTodos).toHaveLength(2);
  });
});
