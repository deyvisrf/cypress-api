/// <reference types="Cypress" />

const faker = require('faker')

describe('Random tests API', () => {

    const account = {
        email: faker.internet.email(),
        nome: faker.name.firstName(),
        senha: faker.random.words(1),
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
})
      


    
    // it('successfully', () => {
    //     cy
    //         .request('GET', 'people/1/')
    //         .then((response) => {
    //             expect(response.status).to.eq(200)
    //             expect(response.body).to.have.property('name', 'Luke Skywalker')
    //         })
    // })

    // it('Authorization', () => {
    //     cy.request('GET', 'https://restapi.wcaquino.me/basicauth')
    // })

    // it('login', () => {
    //     cy.reque.st('GET', 'https://restapi.wcaquino.me/basicauth')
    //     .auth(Cypress.env('user_name'), Cypress.env('user_password'), false);
    // }) 
})

// /// <reference types="Cypress" />

// const faker = require('faker')

// describe('Create Issue', () => {
//   const issue = {
//     email: faker.internet.email(),
//     nome: faker.name.firstName(),
//     redirecionar: false,
//     senha: faker.random.number()
//   }

//   beforeEach(() => {
//     cy.login()
//     cy.gui_createProject(issue.project)
//   })

//   it('successfully', () => {
//     cy.gui_createIssue(issue)

//     cy.get('.issue-details')
//       .should('contain', issue.title)
//       .and('contain', issue.description)
//   })
// })
