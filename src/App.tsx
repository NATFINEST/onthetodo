import './App.css';

function App() {
  return (
    <div className="App">
      <h2 data-testid="title">OnTheTodo</h2>
      <input
        data-testid="input-box"
        type="text"
        placeholder="Enter Todo Item"
      />
      <div data-testid="pending-todo-list">
        <div className="pending-todo-item">Create Workflow</div>
        <div className="pending-todo-item">Push Files</div>
      </div>
      <div data-testid="completed-todo-list">
        <div className="completed-todo-item">Install React</div>
        <div className="completed-todo-item">Install Cypress</div>
      </div>
    </div>
  );
}

export default App;
