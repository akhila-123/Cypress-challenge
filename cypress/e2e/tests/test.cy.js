/// <reference types="cypress" />

// import fixtures

describe("E-Commerce Flow", () => {
  let testData;
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("testdata").then((data) => {
      testData = data;
    });

  });

  //Login Test Visit the login page - Enter invalid credentials and validate error messages.
  it("Login with invalid credentials", () => {
      cy.login(testData.invalidUser);
      cy.visit("/");
    cy.get("#logout2").should("not.be.visible");

  });

  //Login Test Visit the login page.
  // Enter valid. Validate login success.
  // Store the session/cookie for reuse in other tests.
  it("Login with valid credentials", () => {
    cy.login(testData.validUser);
    cy.contains("#nameofuser", "Welcome").should("be.visible");
  });

  //Product Page Test Verify product listing loads correctly.
  //Assert that product name, price, and image are visible for each item.
  //Filter or sort the products (if the feature exists).
  it("Verify product listings page", () => {
    cy.get(".card").should("be.visible").and("have.length", 9);
    cy.get(".card a")
      .should("have.attr", "href")
      .and("include", "prod.html?idp_");
    cy.get(".card img").should("be.visible").and("have.length", 9);
    cy.get(".card .card-title").should("be.visible").and("have.length", 9);
    cy.get(".card .card-text").should("be.visible").and("have.length", 9);
    cy.get(".card-block h5").should("be.visible").and("have.length", 9);
  });

  it("Verify product details page", () => {
    //open the first product
    cy.get(".card a").first().click();
 cy.get("#myCarousel-2 img").should("be.visible");
 cy.get("h2.name").should("be.visible");
 cy.get("h3.price-container").should("be.visible");  
 cy.get(".btn-success").should("be.visible");
  });

  //Cart Functionality Test Add multiple items to the cart. 
  // Navigate to the cart and verify: Items are listed correctly. 
  // Total price is calculated accurately. Remove an item and verify the update.
   it("Add items to cart and verify cart", () => {
    cy.login(testData.validUser);
    cy.visit("/");
    cy.contains(testData.productCategory).click();
    cy.contains(testData.productName).click();
    cy.contains('Add to cart').click();
    // cy.on('window:alert', (str) => {
    //   expect(str).to.contains('Product added');
    // });
    cy.visit('/cart.html');
    cy.get('tr.success').should('contain', testData.productName);
  });

  //Checkout Test Fill in the checkout form with required details. 
  // Stub the backend response (using cy.intercept) to simulate a successful order placement. 
  // Verify success message and redirection behavior.
  
  it("Checkout and verify success message", () => {
    cy.login(testData.validUser);
    cy.visit('/cart.html');
    cy.contains('Place Order').click();
    cy.get('#name').type('John Doe');
    cy.get('#country').type('USA');
    cy.get('#city').type('New York');
    cy.get('#card').type('1234567890123456');
    cy.get('#month').type('12');
    cy.get('#year').type('2025');
    cy.contains('Purchase').click();
    cy.get('.sweet-alert').should('be.visible');
    cy.contains('OK').click();
  });

  //Accessibility Check (Optional Advanced) Integrate cypress-axe. Run accessibility tests on product and checkout pages. Log any violations.

  it("Accessibility check on product page", () => {
    cy.injectAxe();
    cy.checkA11y();
  });
});
