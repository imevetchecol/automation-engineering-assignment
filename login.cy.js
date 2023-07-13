describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});
context('login test', () => {

  it("lookup test",  ()=> {
    cy.viewport(550, 750)
    const validEmail = 'rnd.extension+imevetchecol@paradox.ai';
   

    cy.log(">>> [step 1] open the web page<<<").then(function(){
      cy.visit("https://stgchrome.paradox.ai/automation-engineer-assignment/");
    })
    cy.log(">>> [step 2] <<<").then(function(){
      cy.get('[data-test = email-login-input]').should('be.exist');
      cy.get('[data-test=email-login-submit-button]').should('be.exist');
      cy.get('[data-test = keep-me-signed-in-checkbox]').should('be.exist');
    })

    cy.log(">>> [step 3] <<<").then(function(){
      cy.get('.checkbox_span')
      cy.get('[data-test = keep-me-signed-in-checkbox] .checkbox_span').click()
      cy.get('[data-test = keep-me-signed-in-checkbox] .checkbox_span').should('not.be.checked') 
    })

    cy.log(">>> [step 4] <<<").then(function(){
      cy.get('.checkbox_span')
      cy.get('[data-test = keep-me-signed-in-checkbox] .checkbox_span').click()
      //cy.get('[data-test = keep-me-signed-in-checkbox] .checkbox_span').should('be.checked')
    })
    cy.log(">>> [step 5] <<<").then(function(){
      cy.get('[data-test = email-login-input]').clear().type("Thisemaildoesnotexist@.not.exist").type('{enter}')
      cy.get('[data-test = error-alert]').should('contain', 'Something went wrong')
    })
    cy.log(">>> [step 6] <<<").then(function(){
      cy.get('[data-test = email-login-input]').clear().type(validEmail)
      cy.get('[data-test=email-login-submit-button]').click()

      cy.get('.login_page form', {timeout: 1000}).should('have.class', 'login-password')

    })
    cy.log(">>> [step 7] <<<").then(function(){
      cy.get('[data-test="lookup-email-paragraph"]').should('be.exist');
      cy.get('[data-test="signin-button"]').should('be.exist');
      cy.get('[data-test="submit-password-cancel"]').should('be.exist');
      cy.get('[data-test="keep-me-signed-in-checkbox"]').should('be.exist');
      cy.get('[data-test="forgot-password"]').should('be.exist');
    })
    cy.log(">>> [step 8] <<<").then(function(){
      cy.get('[data-test = submit-password-cancel]').click();
      cy.get('[data-test="email-login-input"]').should('equal', validEmail)
        //.should('contain', validEmail);
      //   cy.log($varTest)
      // })
     
    })
    cy.log(">>> [step 9] <<<").then(function(){
      cy.get('[data-test=email-login-submit-button]').click()
      cy.get('[data-test = submit-password-cancel]').should('be.exist');

    })
    cy.log(">>> [step 10] <<<").then(function(){
      cy.get('[test-data = login-header-back-button]').click();
      cy.get('[data-test = email-login-input]').invoke('text').should('contain', validEmail);

    })
    
  })
 
})