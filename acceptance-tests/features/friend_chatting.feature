Feature: Can I send a message to a friend?
  I want to know if i'm chatting with the right friend

  Scenario Outline: Could the user check if he is chatting with the right friend
	Given I'm using the chat app
    When I want to start chatting with my friend "<friend>"
    Then "<friend>" is the right person to send the message
	
  Examples:
	| friend |
	| pruebaes5b |
	| martinreycristina |
	| srcharlystar |