/*
	players is an array to hold each player's information.
	Fields:
		name - Football player's name
		img  - The relative/absolute path to the image file.
		alt  - The alternative text that describes the image.
		year - The student's year in college (Freshman, Sophomore, Junior, Senior).
		major- The student's current college major.
		games_played    - The number of football games the student has played for the Buffs.
		pass_yards      - The total number of passing yards in the student's football career for the Buffs.
		rushing_yards   - The total number of rushing yards in the student's football career for the Buffs.
		receiving_yards - The total number of receiving yards in the student's football career for the Buffs.
*/
var players = [{name:"John Doe", img: "../resources/img/player1.jpg", alt:"Image of Player 1", year:"Sophomore", major:"Art", games_played: 23, pass_yards: 435, rushing_yards: 200, receiving_yards: 88},
				{name:"James Smith", img: "../resources/img/player2.jpg", alt:"Image of Player 2", year:"Junior", major:"Science", games_played: 17, pass_yards: 192, rushing_yards: 102, receiving_yards: 344},
				{name:"Samuel Phillips", img: "../resources/img/player3.jpg", alt:"Image of Player 3", year:"Freshman", major:"Math", games_played: 8, pass_yards: 35, rushing_yards: 70, receiving_yards: 98},
				{name:"Robert Myers", img: "../resources/img/player4.jpg", alt:"Image of Player 4", year:"Senior", major:"Computer Science", games_played: 31, pass_yards: 802, rushing_yards: 375, receiving_yards: 128}];

function viewStudentStats(id, toggle)
{
 if(toggle == 0)
	{
		console.log(id);
		document.getElementById(id).style.visibility = "hidden";
		document.getElementById(id).style.height = "0px";
	}
 else
	{
	  document.getElementById(id).style.visibility = "visible";
		document.getElementById(id).style.height = "auto";
	}
}


function changeColor(color)
{
	if (color == 'blue')
	{
		document.body.style.backgroundColor = "blue";
	}
	else if (color == 'red')
	{
		document.body.style.backgroundColor = "red";
	}
	else if (color == 'green')
	{
		document.body.style.backgroundColor = "green";
	}
	else
	{
		document.body.style.backgroundColor = "white";
	}


}



function loadStatsPage()
{
	var table = document.getElementById("stats_table");//Retrieve our table element
	var row_counter;//Keeps track of our row index
	var col_counter;//Keeps track of our column index
	var home_score;
	var away_score;
	var winner;
	var totalWins = 0;
	var totalLosses = 0;
	var winHold;
	var lossHold;
	for(row_counter = 0; row_counter < table.rows.length; row_counter++)
	{//Outer for loop iterates over each row
		for(col_counter = 0; col_counter < table.rows[row_counter].cells.length; col_counter++)
		{
			if (col_counter == 2)
			{
				home_score = table.rows[row_counter].cells[col_counter].innerHTML;
				home_score = parseInt(home_score);
				away_score = table.rows[row_counter].cells[col_counter+1].innerHTML;
				away_score = parseInt(away_score);
				if (home_score > away_score)
				{
					winner = "Home";
					totalWins++;
				}
				else {
					winner = "Away";
					totalLosses++;
				}
			}
			else if (col_counter == 4)
			{
				table.rows[row_counter].cells[col_counter].innerHTML = winner;
			}
		}
	}
  winHold = document.getElementById("wins");
	winHold.innerHTML = totalWins;
	lossHold = document.getElementById("losses");
	lossHold.innerHTML = totalLosses;
}



function loadPlayersPage()
{
	var playerIndex = 0;
	var myDiv = document.getElementById('player_selector');


	var oneTag = document.createElement('a');
	var oneName = players[0].name + "\n";
	oneTag.addEventListener( 'click', function() {
		switchPlayers(0);
  });

  oneTag.href = "#";

	oneTag.innerText = oneName;
	console.log(players[0].name);

	var twoTag = document.createElement('a');
	var twoName = players[1].name + "\n";
	twoTag.addEventListener( 'click', function() {
		switchPlayers(1);
  });
  twoTag.href = "#";
	twoTag.innerText = twoName;

	var fourTag = document.createElement('a');
	var fourName = players[3].name + "\n";
	fourTag.addEventListener( 'click', function() {
		switchPlayers(3);
  });
  fourTag.href = "#";
	fourTag.innerText = fourName;

	var threeTag = document.createElement('a');
	var threeName = players[2].name + "\n";
	threeTag.addEventListener( 'click', function() {
		switchPlayers(2);
  });
  threeTag.href = '#';
	threeTag.innerText = threeName;






	myDiv.appendChild(oneTag);
	myDiv.appendChild(twoTag);
	myDiv.appendChild(threeTag);
	myDiv.appendChild(fourTag);


	console.log(oneTag.innerHTML);



}

function switchPlayers(playerNum)
{
	 document.getElementById('p_year').innerHTML = players[playerNum].year;
	 document.getElementById('p_major').innerHTML = players[playerNum].major;
	 document.getElementById('g_played').innerHTML = players[playerNum].games_played;
	 document.getElementById('player_img').src = players[playerNum].img;
	 document.getElementById('player_img').alt = players[playerNum].alt;
	 document.getElementById('p_yards').innerHTML = players[playerNum].pass_yards;
	 document.getElementById('r_yards').innerHTML = players[playerNum].rushing_yards;
	 document.getElementById('rec_yards').innerHTML = players[playerNum].receiving_yards;

	 document.getElementById('avg_p_yards').innerHTML = players[playerNum].pass_yards/players[playerNum].games_played;
   document.getElementById('avg_r_yards').innerHTML = players[playerNum].rushing_yards/players[playerNum].games_played;
   document.getElementById('avg_rec_yards').innerHTML = players[playerNum].receiving_yards/players[playerNum].games_played;

	console.log(playerNum);
}
/*
	Registration Page:
		viewStudentStats(id, toggle) method
			parameters:
				id - The css id of the html tag being updated.
				toggle -
					0 - hide the html tag
					1 - make the html tag visible

			purpose: This method will accept the id of an html tag and a toggle value.
					 The method will then set the html tag's css visibility and height.
					 To hide the html tag (toggle - 0), the visibility will be set to hidden and
					 the height will be set to 0.
					 To reveal the html tag (toggle - 1), the visibility will be set to visible and
					 the height will be set to auto.
*/

/*
	Home Page:
		changeColor(color) method
			parameter:
				color- A css color

			purpose: This method will set the html body's background color to the
					 provided parameter.
*/


/*
	Football Season Stats Page:
		loadStatsPage method:
			parameters: none

			purpose: This method will iterate through the stats table and
					 do the following:
						1. Read through each row of the table & determine which team won
						   the game.

						2. Update the winner column to the name of the winning team.

						3. Keep track of the number of wins/losses for the Buffs.

						4. Update the second table to show the total number of wins/losses for the Buffs.
*/

/*
	Football Player Information Page
		loadPlayersPage method:
			parameters: none

			purpose: This method will populate the dropdown menu to allow the
					 user to select which player's information to view.

					 To handle this, you will need to iterate through the players array
					 and do the following for each player:
						1. Create an anchor tag
						2. Set the href to "#", this will make sure the
							anchor tag doesn't change pages
						3. Set the onclick to call switchPlayers method
							(this will need to pass in the index inside the players array)
						4. Set the anchor tag's text to the player's name.

					After setting all of the anchor tags, update the innerHTML of the dropdown menu.
					As a note, the id for the dropdown menu is player_selector.

		switchPlayers(playerNum) method:
			parameters:
				playerNum - The index of the football player in the players array.

			purpose:
				This method will update the the spans on the player's information pageX
				and calculate the average passing, rushing, and receiving yards.

				Span ids:
					p_year     - the player's year in college
					p_major    - the player's major in college
					g_played   - the number of games played for Buffs
					player_img - the player's photo (must set src and alt)
					p_yards    - the number of passing yards
					r_yards    - the number of rushing yards
					rec_yards  - the number of receiving yards

					Calculated values:
					  avg_p_yards   - the average number of passing yards for the player's Buff career
					  avg_r_yards   - the average number of rushing yards for the player's Buff career
					  avg_rec_yards - the average number of receiving yards for the player's Buff career
*/
