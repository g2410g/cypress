Feature: First Cypress Test
  This is the first cypress test.

  @preview @dev @stg
  Scenario: TC_01 - Test login URL
    Given I visit the "/user/login" url
    Then I should see element ".description" with text "Enter your Drupal username."
    And I should see element ".description" with text "Enter the password that accompanies your username."
