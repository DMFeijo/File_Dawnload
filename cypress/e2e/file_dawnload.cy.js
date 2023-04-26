describe('Dawnload de arquivo', () => {
  it('deve fazer o download de um arquivo', () => {

    cy.visit('http://the-internet.herokuapp.com/download')
    cy.url().should('include', '/download')

    // Clique no botão de download
    cy.get('[href="download/test1.pdf"]').click()

    // Aguarde o arquivo ser baixado
    cy.wait(5000)

    // Verifique se o arquivo foi baixado corretamente
    cy.readFile('cypress/downloads/test1.pdf').should('test1.pdf')

  })
})