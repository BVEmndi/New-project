

    Feature: user can login with valid credentials
    As a User
    I want to login
    So that I can see my emails

    @login
    Scenario:User want to login with valid credentials
    Given user is in the homepage
    When user enter correct username and password
    Then user should be logged in successfully



