class ResourcePage {
        getFirstPostLearnMoreButton() {
        return cy.get(':nth-child(1).blog-index__post.blog-index__post--small .blog-index__post-button-wrapper')
    }
}

export default new ResourcePage();