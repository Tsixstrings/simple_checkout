context("Checkout", () => {
  it("Test 2x1 promo", () => {
    cy.visit("http://localhost:3000");
    cy.get(
      ":nth-child(1) > .MuiPaper-root > .productCard > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root"
    ).click();
    cy.get(
      ":nth-child(1) > .MuiPaper-root > .productCard > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root"
    ).click();
    cy.get(".xLargeText").should("have.text", "5€");
  });
  it("Test bulk>3 promo", () => {
    cy.visit("http://localhost:3000");
    for(let x = 1; x <=3; x++){
        cy.get(
            ":nth-child(2) > .MuiPaper-root > .productCard > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label"
          ).click();
    }
     cy.get(".xLargeText").should("have.text", `${19*3}€`);
  });
});
