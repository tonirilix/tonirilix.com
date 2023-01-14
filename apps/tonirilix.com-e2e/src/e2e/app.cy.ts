import { getGreeting } from '../support/app.po';

describe('tonirilix.com', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to Next.js!');
  });
});

describe('blog', () => {
  beforeEach(() => cy.visit('/blog/dynamic-routing'));

  it('should render the title of the article', () => {
    cy.get('h1').should('contain', 'Dynamic Routing and Static Generation');
  });

  it('should properly render the embedded Youtube component', () => {
    cy.get('iframe').should('be.visible');
  });
});
