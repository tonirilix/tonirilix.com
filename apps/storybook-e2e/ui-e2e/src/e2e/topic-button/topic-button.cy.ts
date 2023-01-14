describe('shared-ui: TopicButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=topicbutton--primary'));

  it('should render the component', () => {
    cy.get('button').should('contain', 'Some great topic');
  });
});
