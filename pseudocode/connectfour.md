1) Define required constants:
	1.1) Define a colors object with keys of 'null' (when the circle is empty), and players 1 & -1. 	The value assigned to each key represents the color to display for an empty circle (null), 	player 1 and player -1.
	1.2) Define winning combinations
2) Define required variables used to track the state of the game:
	2.1) Use 7 columns w/ arrays of 6
	2.2) Use a turn variable to remember whose turn it is.
	2.3) Use a winner variable to represent three different possibilities - player that won, a tie, 	or game in play.

3) Store elements on the page that will be accessed in code more than once in variables to make code more    	concise & readable:
	3.1) Store the 42 elements that represent the squares on the page - as objects in 7 arrays.

4) Upon loading the app should:
	4.1) Initialize the state variables:
		4.1.1) Initialize the board array to 42 nulls to represent empty circles. the 42 elements will be 		“mapped” as objects in arrays. Ex: array1[0] is the bottom left circle.
		4.1.2) Initialize whose turn it is to 1 (player ‘Pepperoni’). Player 'Olive’ will be represented by 		-1.
		4.1.3) Initialize winner to null to represent that there is no winner or tie yet. Winner will hold 		the player value (1 or -1) if there's a winner. Winner will hold a 'T' if there's a tie. 
	4.2) Render those state variables to the page:
		4.2.1) Render the board:
			4.2.1.1) Loop over each of the 7 arrays (6 objects each) that represent the squares on the 			page, and for each iteration:
				4.2.1.1.2) Use the index of the iteration to access the mapped value from the board array.
				4.3.1.1.3) Set the background color of the current element by using the value as a key on 				the colors lookup object (constant).
		4.2.2) Render a message:
			4.2.2.1) If winner has a value other than null (game still in progress), render whose turn it 			is.
			4.2.2.2) If winner is equal to 'T' (tie), render a tie message.
			4.2.2.3) Otherwise, render a congratulatory message to which player has won.
	4.3) Wait for the user to click a column

5) Handle a player clicking a column:
	5.1) select the element that has the lowest index in the array, which has not yet been taken by 		another player.
	5.2) If winner is not null, immediately return because the game is over.
	5.3) Update the board array at the index with the value of turn.
	5.4) Flip turns by multiplying turn by -1 (flips a 1 to -1, and vice-versa).
	5.5) Set the winner variable if there's a winner:
		5.5.1) create a loop - in relation to the selected element, this loop will check the left 3, right 3, up 3, down 3 and diagonal in every direction. find the absolute value of those 4 total elements.
		5.5.4) If the total equals 4, we have a winner! Set winner to the board's value at the 		index specified by the first index in the combo array. Exit the loop.
	5.6) If there's no winner, check if there's a tie:
		5.6.1) Set winner to 'T' if there are no more nulls in the board array.
	5.7) All state has been updated, so render the state to the page (step 4.2).
		

6) Handle a player clicking the replay button:
	6.1) Do steps 4.1 (initialize the state variables) and 4.2 (render).