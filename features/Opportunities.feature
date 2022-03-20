Feature: Crate new Opportunities

  Scenario Outline: To create new Opportunities
    Given I am on Sales force home page
    Then I verify salesforce home page
    And I will create new Opportunities with <name>, <Account>, <stage> and Amount <Amount>
    Examples:
      | name      | Account            | stage       | Amount |
      | Prav-1234 | Prav-NodeJSAccount | Prospecting | 10000  |

  Scenario: To check Graph Data
    Given I am on Sales force home page
    Then I verify salesforce home page
    And I verify Quarterly goal data
