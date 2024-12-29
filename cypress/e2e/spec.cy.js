describe('book adding site', () => {
 
  Cypress.Commands.add('loginAndVisit', (email, password) => {
    cy.visit('/');
    cy.login(email, password);
    cy.contains('Добро пожаловать ' + email).should('be.visible');
  });

  it('input valid', () => {
    cy.loginAndVisit('test@test.com', 'test');
    cy.contains('Log out').should('be.visible');
  });

  it('input fall', () => {
    cy.visit('/');
    cy.login(' ', ' ');
    cy.get('#pass')
      .then(($el) => {
        return $el[0].checkValidity();
      })
      .should('be.true');
  });

  it('adding a new book', () => {
    cy.loginAndVisit('test@test.com', 'test');
    cy.newBook('Testing Computer Software', 'Testing Computer Software', 'cypress\fixtures\Джек Фальк.txt', 'cypress\fixtures\test comp soft.jpg', 'Джек Фальк');
    cy.contains('Submit').click();
    cy.contains('Add to favorite').should('be.visible');
  });

  it('should add a book to favorites', () => {
    cy.loginAndVisit('test@test.com', 'test');
    cy.contains('Add to favorite').click();
    cy.contains('Delete from favorite').should('be.visible');
  });

  it('should remove a book from favorites', () => {
    cy.loginAndVisit('test@test.com', 'test');
    cy.contains('Favorites').click();
    cy.contains('Delete from favorite').click();
    cy.contains('Вадим Зеланд').should('not.exist');
  });

  it('should display favorite books', () => {
    cy.loginAndVisit('test@test.com', 'test');
    cy.contains('Favorites').click();
    cy.contains('Вадим Зеланд').should('be.visible');
  });

});