import axios from 'axios';
import * as actions from '../../redux/action-creators';
import store from '../../redux/store';

describe('Store', () => {
  const books = [{ id: 1, name: 'Refactoring' }];
  it('Fetch books from remote', () => {
    axios.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: books }));
    return store.dispatch(actions.fetchBooks()).then(() => {
      const state = store.getState();
      expect(state.books.length).toEqual(1);
      expect(state.books).toEqual(books);
    });
  });
});
