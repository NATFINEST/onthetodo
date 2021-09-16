import './App.scss';
import InputBox from './components/input/InputBox';
import TodoContainer from './components/todos/TodoContainer';
import logo from './clipboard.svg';

const App = () => {
  return (
    <div className="App">
      <div className="TodoApp">
        <img className="logo" src={logo} alt="logo" />
        <h2 className="heading" data-testid="title">
          OnTheTodo
        </h2>
        <InputBox />
        <TodoContainer />
      </div>
    </div>
  );
};

export default App;
