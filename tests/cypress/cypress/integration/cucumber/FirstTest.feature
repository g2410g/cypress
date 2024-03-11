Feature: First Cypress Test
  This is the first cypress test.

  @preview @dev @stg
  Scenario: TC_01 - Test login URL
    Given I visit the "/user/login" url
    Then I should see element ".description" with text "Enter your Drupal username."
    And I should see element ".description" with text "Enter the password that accompanies your username."

  @preview @dev @stg
  Scenario Outline: Ensure the accordion has expand all/collapse all toggle button and works as expected.
    Given I visit the <url> url
    Then I should see element ".title.page-title" with text "Welcome!"
    And I should see element ".text-content"

    Examples:
      | url |
      | "/" |
