/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login', (email, password) => { 
    cy.visit('localhost:3000/')
    cy.get('[id="email"]').type(email)
    cy.wait(1000)
    cy.get('[id="password"]').type(password)
    cy.wait(1000)
    cy.contains('Entrar').click()

  })
  
  Cypress.Commands.add('criar', (titulo, discussao) => { 
    cy.visit('localhost:3000/home/discussao/2/criaDiscussao')
    cy.get('[id="titulo"]').type(titulo)
    cy.wait(2000)
    cy.get('[id="discussao"]').type(discussao)
    cy.wait(2000)
    cy.contains('Enviar').click()
    // cy.url().should('contain', '/login-successful')
  })

  Cypress.Commands.add('comentar', (comentario) => { 
    cy.visit('localhost:3000/home/discussao/acessaDiscussao/5/CriaComentario')
    cy.get('[id="my-input"]').type(comentario)
    cy.wait(4000)
    cy.contains('Comentar').click()
    // cy.url().should('contain', '/login-successful')
  })
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }