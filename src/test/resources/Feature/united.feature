Feature: checking search flight and checkout functionality

@Smoke
Scenario Outline: Users are able to search for flights and proceed to final checkout
	Given Users are on united home page
	When User enters depart flight "<depflight>"
	Then User enters return flight "<retflight>"
	And User selects depart date "<depdate>"
	Then User selects return date "<retdate>"
	Then Click search button
	And Select economy depart flight
	Then Select economy return flight
	And Close popup box
	Then Print out price
				
	
	Examples:
		|depflight| retflight| depdate| retdate|
		|IAD| BOS| 05/05/18| 05/10/18| 