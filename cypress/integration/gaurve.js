/// <reference types="cypress" />

context("visit website login page", () => {});
// afterEach(() => {
//   cy.get('.f1tksdgc').click({force:true})
//   cy.get('.column').contains('Logout').click()
// })

//Login to the website

it("User loged in on the website", () => {
  cy.visit("https://int-autogeneral.codafy.com.au/login");
  cy.wait(6000);
  // cy.get("input[type='email']").type("Gaurav.singh@autogeneral.com.au");
  // cy.wait(2000);
  // cy.get("input[type='password']").type("VICTORgarv@7");
  // cy.get(".auth0-label-submit").click({ force: true });

  // returning false here prevents Cypress from
  // failing the test

  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  // selecting "ACME Builder"
  cy.get('div[class="jss76 jss77"]').click({ multiple: true });
  cy.wait(3000);
  cy.get(".sc-gGiJkG.jzdkxv").contains("ACME Builders").click();
  //Selecting the homeLoan from the project drop down
  cy.xpath("//button[normalize-space()='ADD NEW PROJECT']").click();
  cy.get("body > div.ensureScrollingInPortalElement > div > button").click();
  //Selecting the address from autocomplete dropdown
  cy.get(
    "#root > div.sc-cSOiNf.hxjlpu > div.sc-eLgOdN.sc-Fyfyc.ejJoEn.fTMjUf > div > div > div:nth-child(3) > div:nth-child(3) > div > div > div.sc-eiWQhh.hDUzxz > input"
  ).type("220 melbourne street,south brisbane");
  cy.get(
    "#root > div.sc-cSOiNf.hxjlpu > div.sc-eLgOdN.sc-Fyfyc.ejJoEn.fTMjUf > div > div > div:nth-child(3) > div:nth-child(3) > div > div > div.sc-dmqUwf.cfoCWJ.autocomplete-dropdown-container >*"
  ).each(($el, index, $list) => {
    const text1 = $el.text();
    cy.log(text1);
    if (text1 == text1) {
      $el.trigger("click");
    }
  });
  cy.get('input[name="unitNumber"]').type("304")
  //Event Type
  cy.get('[for="homeClaim_eventType"]').next().click();
  cy.get('[data-testid="Malicious-Damage"]').click({ force: true });
  cy.get('input[type="time"]').type("03:00");
  cy.get('input[name="homeClaim_dateOfLoss"]').type("2021-03-03");
  cy.get('input[type="radio"]').next().contains("Yes").click();
  //Typing incident description
   cy.xpath('//iframe[@title="Rich Text Area. Press ALT-0 for help."]').within(function($ifram){
   const iframeContent = $ifram.contents().find('body')
   cy.wrap(iframeContent).clear().type("malicious damage") 

   })

  //Insured info
  cy.get('[for="homeClaim_insuredFirstName"]').next().type("Gaurav");
  cy.get('[for="homeClaim_insuredLastName"]').next().type("Singh");
  cy.get('[for="homeClaim_insuredMobilePhone"]').next().type("1234567890");

  //Policy detail
  cy.get('[for="homeClaim_brand"]').next().click();
  cy.get('[data-testid="Budget-Direct"]').click({ force: true });
  cy.get('input[name="homeClaim_policyNumber"]').type("121343").should('have.value','121343');
  cy.get('input[name="homeClaim_coverType"]').type("Full");
  cy.xpath(
    '//*[@id="root"]/div[2]/div[2]/div/div/div[3]/div[3]/div/div[5]/div/div/div/input'
  ).type("full cover");
  cy.get('input[name="homeClaim_inceptionDate"]').type("2021-03-30");
  cy.get('input[name="homeClaim_buildingSumInsured"]').type("50000");
  cy.get('input[name="homeClaim_contentsSumInsured"]').type("20000");
  cy.get('input[name="homeClaim_buildingExcess"]').type("2000");
  cy.get('input[name="homeClaim_contentsExcess"]')
    .type("1500")
    .should("have.value", "1500");
  cy.get('input[name="homeClaim_postalAddress_checkbox"]')
    .click({ force: true })
    .should("be.checked");
  cy.xpath(
    '//*[@id="root"]/div[2]/div[2]/div/div/div[3]/div[5]/div/div[5]/div/div/div[1]/div/span'
  ).click();
  cy.get("div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > i").click();
  cy.xpath('//div[contains(text(),"Open")]').click();
  cy.get('div[data-testid="account-dropdown"]').click()
  cy.xpath('//div[contains(text(),"ACME Builders Test Account")]').click()
  cy.xpath('//button[normalize-space()="Create Project"]').click()

});
