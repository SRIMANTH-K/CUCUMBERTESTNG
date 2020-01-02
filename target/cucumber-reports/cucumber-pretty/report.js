$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/srima/workspace1/CUCUMBERTESTNG/src/test/java/FeatureFile/setup.feature");
formatter.feature({
  "line": 1,
  "name": "HRMorange login feature",
  "description": "",
  "id": "hrmorange-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Orangehrm testing functionality",
  "description": "",
  "id": "hrmorange-login-feature;orangehrm-testing-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of login page is orangehrm",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "hrmorange-login-feature;orangehrm-testing-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16,
      "id": "hrmorange-login-feature;orangehrm-testing-functionality;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 17,
      "id": "hrmorange-login-feature;orangehrm-testing-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Orangehrm testing functionality",
  "description": "",
  "id": "hrmorange-login-feature;orangehrm-testing-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of login page is orangehrm",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SetUpStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 32378860200,
  "status": "passed"
});
formatter.match({
  "location": "SetUpStepDefinition.title_of_login_page_is_orangehrm()"
});
formatter.result({
  "duration": 7250400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    },
    {
      "val": "admin123",
      "offset": 25
    }
  ],
  "location": "SetUpStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 180304100,
  "status": "passed"
});
formatter.match({
  "location": "SetUpStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2368451200,
  "status": "passed"
});
formatter.match({
  "location": "SetUpStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 16951300,
  "status": "passed"
});
formatter.match({
  "location": "SetUpStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 183165100,
  "status": "passed"
});
});