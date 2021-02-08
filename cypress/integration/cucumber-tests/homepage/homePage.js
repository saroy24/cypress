
const URL = 'https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login'
const USERNAME_INPUT = '#txtUsername'
const PASSWORD_INPUT = '#txtPassword'
const SUBMIT_BUTTON = '#btnLogin'


// DATA



class homePage {
  static visic() {
    cy.visit(URL)
  }

  static fillUsername(username) {
    cy.get(USERNAME_INPUT).type(username)
  }

  static fillPassword(password) {
    cy.get(PASSWORD_INPUT).type(password)
  }

  static submit() {
    cy.get(SUBMIT_BUTTON).click()
  }


  
}





export default homePage
