export class LoginPage {

    visitLoginPage(){
        cy.viewport(1440,900)
        cy.visit('https://www.daily-harvest.com/login')
    }

    hamburgerMenu(){
        return cy.get('.p-0 > .d-flex > svg')
    }

    dailyHarvestLogo(){
        return cy.get('.my-5')
    }

    loginTitle(){
        return cy.get('.secondary-nav').contains('Login')
    }

    emailAddressText(){
        return cy.get(':nth-child(2) > label')
    }

    emailAddressField(){
        return cy.get('#email')
    }

    passwordText(){
        return cy.get(':nth-child(3) > label')
    }

    passwordField(){
        return cy.get('#password')
    }

    rememberMeCheckbox(){
        return cy.get('#remember')
    }

    rememberMeText(){
        return cy.get('label > span')
    }

    forgotYourPasswordLink(){
        return cy.get('.pw_reset')
    }

    loginButton(){
        return cy.get('[data-cy=login-btn]')
    }

    signUpText(){
        return cy.get('.login > .text-center')
    }

    signUpLink(){
        return cy.get('.text-center > .acc-text')
    }
}