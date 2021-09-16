import { render } from '@testing-library/react';
import TodoContainer from './TodoContainer';
import * as reactRedux from 'react-redux';
import * as ourActions from '../../redux/action-creators';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Todo List', () => {
  const mockStore = {
    todos: [
      {
        id: 1,
        title: 'First Item',
        completed: false,
        createdAt: 'Tue Sep 14 2021',
      },
      {
        id: 2,
        title: 'First Item',
        completed: false,
        createdAt: 'Tue Sep 14 2021',
      },
    ],
    loading: true,
    error: false,
  };

  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });

  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;

  it('should show a list of pending todos', () => {
    // const { container } = render(
    //   <Provider store={store}>
    //     <TodoContainer {...props} />
    //   </Provider>
    // );

    const { container } = render(<TodoContainer />);
    expect(importantAction).toHaveBeenCalled();
    // const pendingTodos = container.querySelectorAll('.pending-todo-item');
    // expect(pendingTodos).toHaveLength(2);
  });

  // it('should show a list of completed todos', () => {
  //   const { container } = render(<TodoContainer />);
  //   const completedTodos = container.querySelectorAll('.completed-todo-item');
  //   expect(completedTodos).toHaveLength(2);
  // });
});
