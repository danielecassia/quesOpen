describe('The MadLibs Main Form', () => {
  it('Criar uma Discussão', () => {
    cy.login('dani@dani', '123')
    cy.wait(3000)
    cy.visit('localhost:3000/home/discussao/acessaDiscussao/5')
    cy.wait(5000)
    // cy.contains('AddCommentIcon').click()
    cy.comentar('Comentário da Dani')
    cy.wait(3000)
    cy.visit('localhost:3000/home/discussao/2')
    cy.wait(3000)
    cy.criar('Teste Cypress', 'Isso é um teste legal de automatização de testes')
    cy.wait(1000)
    // cy.visit('localhost:3000/home/discussao/2')
  });

})