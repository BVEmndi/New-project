$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('package1\login.feature');
formatter.feature({
  "line": 3,
  "name": "user can login with valid credentials",
  "description": "As a User\r\nI want to login\r\nSo that I can see my emails",
  "id": "user-can-login-with-valid-credentials",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 9,
  "name": "User want to login with valid credentials",
  "description": "",
  "id": "user-can-login-with-valid-credentials;user-want-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user is in the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user enter correct username and password",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user should be logged in successfully",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});