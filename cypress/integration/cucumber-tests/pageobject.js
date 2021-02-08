import LoginPage from './loginPage'


cy.fixture('login').then(function(data)
{

    return this.data = data
})

describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {

    LoginPage.fillUsername(this.data.address)
    LoginPage.fillPassword(this.data.passcode)



})

it('My 2nd case',function() {

    LoginPage.fillUsername(this.data.loginuser)
    LoginPage.fillPassword(this.data.passcode)



})

})