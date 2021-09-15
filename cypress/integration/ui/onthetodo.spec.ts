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
    cy.get('.pending-todo-item').should('have.length', 2);
  });

  it('should get list of completed todos', () => {
    gotoApp();
    cy.get('.completed-todo-item').should('have.length', 2);
  });

  it('should show an input box', () => {
    gotoApp();

    cy.get('input[data-testid="input-box"]').should('exist');
  });
});

export {};
