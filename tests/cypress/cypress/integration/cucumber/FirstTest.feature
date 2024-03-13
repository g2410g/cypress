Feature: First Cypress Test
  This is the first cypress test.

  @preview @dev @stg
  Scenario: TC_01 - Test login URL and user authentication.
    Given I visit the "/user/login" url
    Then I should see element ".description" with text "Enter your Cypress username."
    And I should see element ".description" with text "Enter the password that accompanies your username."
    Given I login using "gaurav.garg"
    Then I should see element ".title.page-title" with text "gaurav.garg"

  @preview @dev @stg
  Scenario Outline: TC_02_03 - Ensure the user goes to page and see the content.
    Given I visit the <url> url
    Then I should see element ".node__title a span" with text "The Power of Storytelling: Connecting Through Narratives"
    And I should see element ".view-content"

    Examples:
      | url         |
      | "/"         |
      | "/articles" |

  @preview @dev @stg
  Scenario: TC_04 - Failed Test: User login and redirect to dashboard.
    Given I login using "gaurav.garg"
    Then I should see element ".title.page-title" with text "Welcome!"
