Feature: Login to Application

    As a valid user
    I want to log into Application
   
    Background: login
        Given I open login page
     


@regression
    Scenario: Valid Login

        When I fill username with "Admin"
        And I fill password with "admin123"
        And I click on submit
        Then I should see homepage

@smoketest
     Scenario: Valid Login datatable
     
        When  Enter username with
        |user|passwordcms|ghjg|
        |opensourcecms|opensourcecms|vfgfgf| 
        And Enter password with 
        |user|passwordcms|
        |opensourcecms|opensourcecms|
        And I click on submit
        Then I should see homepage
                
                
