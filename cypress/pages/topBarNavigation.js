class TopBarNavigation {
    getResourcesDropdown() { //Used jQuery to locate the Resources drop down, in css the locator was dependant on the position of the element (cy.get('.nobl9__mega-menu--link-title').eq(4))
        const $div = Cypress.$(".nobl9__mega-menu--link-title div[data-hs-cos-field='title']:contains('Resources')")
        return cy.wrap($div)
    }

    getNoble9BlogButton() {
        return cy.get(".nobl9__mega-menu--sub-wrapper [data-related-link='https://www.nobl9.com/resources']")
    }

    getRequestButton() {
        return cy.get('#header-trial')
    }
}

export default new TopBarNavigation();