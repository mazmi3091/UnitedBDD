$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/united.feature");
formatter.feature({
  "line": 1,
  "name": "checking search flight and checkout functionality",
  "description": "",
  "id": "checking-search-flight-and-checkout-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Users are able to search for flights and proceed to final checkout",
  "description": "",
  "id": "checking-search-flight-and-checkout-functionality;users-are-able-to-search-for-flights-and-proceed-to-final-checkout",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Users are on united home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters depart flight \"\u003cdepflight\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters return flight \"\u003cretflight\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User selects depart date \"\u003cdepdate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User selects return date \"\u003cretdate\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click search button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select economy depart flight",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Select economy return flight",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close popup box",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Print out price",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "checking-search-flight-and-checkout-functionality;users-are-able-to-search-for-flights-and-proceed-to-final-checkout;",
  "rows": [
    {
      "cells": [
        "depflight",
        "retflight",
        "depdate",
        "retdate"
      ],
      "line": 18,
      "id": "checking-search-flight-and-checkout-functionality;users-are-able-to-search-for-flights-and-proceed-to-final-checkout;;1"
    },
    {
      "cells": [
        "IAD",
        "BOS",
        "05/05/18",
        "05/10/18"
      ],
      "line": 19,
      "id": "checking-search-flight-and-checkout-functionality;users-are-able-to-search-for-flights-and-proceed-to-final-checkout;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5361275926,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Users are able to search for flights and proceed to final checkout",
  "description": "",
  "id": "checking-search-flight-and-checkout-functionality;users-are-able-to-search-for-flights-and-proceed-to-final-checkout;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Users are on united home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters depart flight \"IAD\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters return flight \"BOS\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User selects depart date \"05/05/18\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User selects return date \"05/10/18\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click search button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select economy depart flight",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Select economy return flight",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close popup box",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Print out price",
  "keyword": "Then "
});
formatter.match({
  "location": "GUIStepDefinition.home()"
});
formatter.result({
  "duration": 72519796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IAD",
      "offset": 27
    }
  ],
  "location": "GUIStepDefinition.departFlight(String)"
});
formatter.result({
  "duration": 2347741120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BOS",
      "offset": 27
    }
  ],
  "location": "GUIStepDefinition.returnFlight(String)"
});
formatter.result({
  "duration": 2200225369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05/05/18",
      "offset": 26
    }
  ],
  "location": "GUIStepDefinition.depDate(String)"
});
formatter.result({
  "duration": 1250785440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05/10/18",
      "offset": 26
    }
  ],
  "location": "GUIStepDefinition.retDate(String)"
});
formatter.result({
  "duration": 2330005929,
  "status": "passed"
});
formatter.match({
  "location": "GUIStepDefinition.searchButton()"
});
formatter.result({
  "duration": 8094689313,
  "status": "passed"
});
formatter.match({
  "location": "GUIStepDefinition.firstFlight()"
});
formatter.result({
  "duration": 6257042700,
  "status": "passed"
});
formatter.match({
  "location": "GUIStepDefinition.secondFlight()"
});
formatter.result({
  "duration": 10716233316,
  "status": "passed"
});
formatter.match({
  "location": "GUIStepDefinition.popupBox()"
});
formatter.result({
  "duration": 1113208436,
  "status": "passed"
});
formatter.match({
  "location": "GUIStepDefinition.printPrice()"
});
formatter.result({
  "duration": 1085062086,
  "status": "passed"
});
formatter.after({
  "duration": 55844,
  "status": "passed"
});
});