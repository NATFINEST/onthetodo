import React from 'react';

const TodoContainer = () => {
  return (
    <>
      <div data-testid="pending-todo-list">
        <div className="pending-todo-item">Create Workflow</div>
        <div className="pending-todo-item">Push Files</div>
      </div>
      <div data-testid="completed-todo-list">
        <div className="completed-todo-item">Install React</div>
        <div className="completed-todo-item">Install Cypress</div>
      </div>
    </>
  );
};

export default TodoContainer;
