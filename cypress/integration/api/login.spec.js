/// <reference types="Cypress" />

const faker = require('faker')

describe('Random tests API', () => {

    const account = {
        email: faker.internet.email(),
        nome: faker.name.firstName(),
        senha: faker.random.word(1),
        descricao: faker.random.words()
      }

    it('Create account', () => {
        cy.createAccount(account)
        .then(res => {
            console.log(res)
            expect(res.status).to.equal(201)
            expect(res.body.nome).to.equal(account.nome)
        })
    })

    it('Update accounts', () => {
        cy.getToken(account)
            .then(token => {

                cy.request({
                    method: 'POST',
                    url: '/contas',
                    headers: { Authorization: `JWT ${token}`},
                    body: {
                        nome: account.descricao
                    }
                }) 
            })
        .then(res => {
            expect(res.status).to.equal(201)
            expect(res.body.nome).to.equal(account.descricao)
        })
    }) 

    it('Reset account', () => {
        cy.resetRest(account)
        .then(res => {
            expect(res.status).to.equal(200)
        })
    })
})