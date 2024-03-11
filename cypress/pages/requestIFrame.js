class RequestIFrame {
    static selectors = {
        firstname: '#firstname-input',
        lastname: '#lastname-input',
        email: '#email-input',
        companyName: '#company-input',
        jobTitle: '#jobtitle-input'
    }
    
    fillIframeElements(firstname, lastname, email, companyName, jobTitle) {
        cy.locateRequestIFrame().find(RequestIFrame.selectors.firstname).type(firstname)
        cy.locateRequestIFrame().find(RequestIFrame.selectors.lastname).type(lastname)
        cy.locateRequestIFrame().find(RequestIFrame.selectors.email).type(email)
        cy.locateRequestIFrame().find(RequestIFrame.selectors.companyName).type(companyName)
        cy.locateRequestIFrame().find(RequestIFrame.selectors.jobTitle).type(jobTitle)
    }

    getCloseButton() {
        return cy.locateRequestIFrame().find('#interactive-close-button')
    }
  
  }
  
  export default new RequestIFrame();