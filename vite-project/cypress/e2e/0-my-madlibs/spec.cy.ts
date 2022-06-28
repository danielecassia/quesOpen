describe('The MadLibs Main Form', () => {
  it('Criar uma Discussão', () => {
    cy.login('dani@dani', '123')
    cy.wait(2000)
    cy.criar('Teste Cypress', 'Isso é um teste legal de automatização de testes')
  });
  it('Fazer comentário', () => {
    cy.visit('localhost:3000/home/discussao/acessaDiscussao/5')
    cy.comentar('Comentário da Dani')
  });

})