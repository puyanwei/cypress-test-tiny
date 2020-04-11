/// <reference types="cypress" />
describe("page", () => {
  it("works", () => {
    cy.visit("https://getbootstrap.com/docs/4.0/components/forms/");
    cy.get("#exampleInputEmail1").type("one two three");
  });
});
