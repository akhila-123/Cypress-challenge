# Cypress Challenge Assignment: E-Commerce Flow Automation
Objective:
Automate an end-to-end user journey on a mock e-commerce site. You can use a public site like https://www.saucedemo.com or install a local mock app (e.g., react-shopping-cart).

✅ **Tasks to Complete**
1. **Login Test**
Visit the login page.
Enter valid and invalid credentials.
Validate login success and error messages.
Store the session/cookie for reuse in other tests.

2. **Product Page Test**
Verify product listing loads correctly.
Assert that product name, price, and image are visible for each item.
Filter or sort the products (if the feature exists).

3. **Cart Functionality Test**
Add multiple items to the cart.
Navigate to the cart and verify:
Items are listed correctly.
Total price is calculated accurately.
Remove an item and verify the update.

4. **Checkout Test**
Fill in the checkout form with required details.
Stub the backend response (using cy.intercept) to simulate a successful order placement.
Verify success message and redirection behavior.

5. **Accessibility Check (Optional Advanced)**
Integrate cypress-axe.
Run accessibility tests on product and checkout pages.
Log any violations.

💡 **Bonus Challenges**
**Custom Commands:** Abstract repeated steps (e.g., login, addToCart) into custom Cypress commands.

**Fixtures & Data-Driven Tests**: Use JSON fixture files for different user types or product data.

**Error Handling:** Test how the app behaves when:

**Network is slow** (simulate via cy.intercept with delay).

**Backend returns an error** (simulate a 500 response).

**CI Readiness: **Configure your tests to run headlessly and generate a report using Mochawesome or Cypress dashboard.

🧠 **Interview Prep Tip**
After completing this:
Be ready to explain your folder structure and why you wrote tests the way you did.
Know how to debug failed tests, stub APIs, and mock different scenarios.

**Expect questions like:**

"How do you handle flaky tests?"
"How do you test dynamic elements or deal with waits?"
"What’s your strategy for test data management?"
