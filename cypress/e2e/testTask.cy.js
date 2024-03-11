import RequestIFrame from "../pages/requestIFrame"
import TopBarNavigation from "../pages/topBarNavigation"
import ResourcePage from "../pages/resourcePage"

describe('Test Task', () => {
  before(() => {
    cy.viewport(1440, 900)
    cy.visit('https://www.nobl9.com/')
    cy.fixture('RequestData').then(function (data) {
      this.data = data;
    })
  })

  it('Opens first blog post, clicks the request the demo, fills data and closes the iframe', function() {
    TopBarNavigation.getResourcesDropdown().click();
    TopBarNavigation.getNoble9BlogButton().click();
    cy.url().should('eq', 'https://www.nobl9.com/resources')

    cy.get(':nth-child(1).blog-index__post.blog-index__post--small h3 a').invoke('text').then((title) => { //Read the title of the first blog post
      ResourcePage.getFirstPostLearnMoreButton().click();
      cy.get('span#hs_cos_wrapper_name').invoke('text').then((text) => {                                   //Read the title of the page
        cy.wrap(text).should('eq', title)                                                                  //Assert that first blog post was opened
      }) 
    })

    TopBarNavigation.getRequestButton().click()
    RequestIFrame.fillIframeElements(this.data.Firstname, this.data.Lastname, this.data.Email, this.data.CompanyName, this.data.JobTitle)
    RequestIFrame.getCloseButton().click()
    cy.get('iframe.go812842568').should('not.be.visible')
  })
})