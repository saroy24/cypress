import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import HomePage from './homePage'

 When('Enter username with', (dataTable) => {

  dataTable.hashes().forEach(element => {

    HomePage.fillUsername(element.user)

  
  })



});

When('Enter password with', (dataTable) => {

  dataTable.hashes().forEach(element => {

    HomePage.fillPassword(element.passwordcms)

  
  })



});




When(/^Enter password with <passwordcms>$/, function(datatable)  {
	HomePage.fillUsername(datatable.rawTable[1][0])
});

Given('I open login page', () => {
  // cy.visit('http://zero.webappsecurity.com/login.html')
  HomePage.visic()
})

When('I submit login', () => {
  //   cy.get('#user_login').type('username')
  //   cy.get('#user_password').type('password')
  //   cy.get('input[name="submit"]').type('username')
  HomePage.fillUsername('users')  
  HomePage.fillPassword('password')
  HomePage.submit()
})

// When('I fill username with {string}', username => {
//     HomePage.fillUsername(username)
// })


When(/^I fill username with "([^"]*)"$/, (username) => {
  const targetDate = Cypress.moment().format('MM/DD/YYYY')
cy.log(targetDate)
cy.get('input[id="date-picker-inline"]')
  .clear()
  .type(`${targetDate}{enter}`)


HomePage.fillUsername(username)
});
And('I fill password with {string}', password => {
    HomePage.fillPassword(password)
})

When('I click on submit', () => {
    HomePage.submit()
})

Then('I should see homepage', () => {
  cy.get('#option-menu > :nth-child(3) > a').should('be.visible')
})
