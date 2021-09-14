import './App.css';
import InputContainer from './components/input/InputContainer';
import TodoContainer from './components/todos/TodoContainer';

const App = () => {
  return (
    <div className="App">
      <h2 data-testid="title">OnTheTodo</h2>
      <InputContainer />
      <TodoContainer />
    </div>
  );
};

export default App;
