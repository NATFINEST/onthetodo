describe('OnTheTodo', () => {
  const gotoApp = () => {
    cy.visit('/');
  };

  const checkAppTitle = () => {
    cy.get('h2[data-testid="title"]').contains('OnTheTodo');
  };

  it('should visit the app', () => {
    gotoApp();
    checkAppTitle();
  });

  it('should get list of pending todos', () => {
    gotoApp();

    cy.get('div[data-testid="pending-todo-list"]').should('exist');
    cy.get('div.pending-todo-item').should('have.length', 2);
  });

  it('should get list of completed todos', () => {
    gotoApp();

    cy.get('div[data-testid="completed-todo-list"]').should('exist');
    cy.get('div.completed-todo-item').should('have.length', 2);
  });

  it('should show an input box', () => {
    gotoApp();

    cy.get('input[data-testid="input-box"]').should('exist');
  });
});

export {};
