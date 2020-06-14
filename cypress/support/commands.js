Cypress.Commands.add('createAccount', account => {
    cy.request({
        method: 'POST',
        url: '/usuarios',
        body: {
            email: account.email,
            nome: account.nome,
            senha: account.senha,
            redirecionar: false
        }
    })
})

Cypress.Commands.add('getToken', account => {
    cy.request({
        method: 'POST',
        url: '/signin',
        body: {
            email: account.email,
            redirecionar: false,
            senha: account.senha
        }
    })
    .its('body.token').should('not.be.empty')
    .then(token => {
        return token
    })
})