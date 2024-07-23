Feature: Validate Authentication mechanisms to ensure data security and optimize user experience

  @sanity @login @negative
  Scenario Outline: Verify user is not authenticated
    When I enter username "<username>"
    And I enter password "<password>"
    And I click on submit button
    Then I should not be able to login "<loginErrorMessage>"

    Examples: 
      | username          | password  | loginErrorMessage                                            |
      | alice@example.com |  10203040 | Username and password do not match any user in this service. |
      | 1@2.com           | f-o-o     | Username and password do not match any user in this service. |
      | ",                | ",        | Username and password do not match any user in this service. |
      | bob@example.com   | ",        | Username and password do not match any user in this service. |
      | bob@example.com   | 10203040& | Username and password do not match any user in this service. |

  @sanity @login @positive
  Scenario Outline: Verify user is authenticated & login successfully
    When I enter username "<username>"
    And I enter password "<password>"
    And I click on submit button
    Then I should be able to login successfully

    Examples: 
      | username      | password     |
      | standard_user | secret_sauce |