Feature: HRMorange login feature

Scenario Outline: Orangehrm testing functionality



Given user is already on Login Page
When title of login page is orangehrm
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then Close the browser


Examples:
	| username | password |
	| Admin    | admin123 |