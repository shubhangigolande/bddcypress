Feature:loging functionality

Check the login functionality

Scenario: Validate the login functionality with valid credentials
    Given I open sauce demo Url
    Then Fill the Username
    When Fill the Username
    Then Fill the password
    Then Click on login Button
     When Validate sucessful login
    And Validate sucessful login.
    
@focuse
    Scenario: Validate the login functionality with invalid credentials
    Given I open sauce demo Url.
    Then Fill the Username.
    Then Fill the password.
    When Click on login Button.
   And invalidate sucessful login.