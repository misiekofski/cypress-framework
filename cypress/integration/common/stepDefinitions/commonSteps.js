Given('I open Google homepage', () => {
    cy.visit('https://www.google.com');
});

Then( 'Title of web page is {string}', (title) => {
    cy.title().should('include', title); 
});