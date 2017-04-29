

var computerChoice = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var guesses = 9;
var wins = 0;
var gameChoice=computerChoice[Math.floor(Math.random()*computerChoice.length)];
var pastGuesses =[];



var game = {
	
	ifGuessIsRight: function() {
		
		wins++;
		guesses = 9;
		var gameChoice=computerChoice[Math.floor(Math.random()*computerChoice.length)];
		console.log(gameChoice);
		alert("You were right!");
		var pg = $("#pastguesses");
		pg.empty();
		pastGuesses = [];
		
		document.onkeyup = function(event) {
		var userGuess = (event.key);
		console.log(userGuess)
		pastGuesses.push(userGuess);
		var pg = $("#pastguesses");
		pg.html(pastGuesses);
		
	




		if (userGuess === gameChoice) {
		game.ifGuessIsRight();
		var winscore= $("#winscore");
		winscore.html(wins);
		var guessesleft= $("#guessscore");
		guessesleft.html(guesses);
		var pg = $("#pastguesses");
		pg.empty();



}

		else if (userGuess !== gameChoice) {
		game.ifGuessIsWrong();
		var winscore= $("#winscore");
		winscore.html(wins);
		var guessesleft= $("#guessscore");
		guessesleft.html(guesses);
		var pg = $("#pastguesses");
		pg.html(pastGuesses);
} 






else if (guesses === 0) {
	game.gameLost();
	var winscore= $("#winscore");
	winscore.html(wins);
	var guessesleft= $("#guessscore");
	guessesleft.html(guesses);
	pastGuesses = [];
	var pg = $("#pastguesses");
	pg.html(pastGuesses)


}
}
},
	
	ifGuessIsWrong: function(){
		guesses --

		if (guesses===0) {
		game.gameLost();
		var winscore= $("#winscore");
		winscore.html(wins);
		var pg = $("#pastguesses");
		pg.empty();





		}
	},

	gameLost: function(){
		alert("You Lose!");
		var pg = $("#pastguesses");
		pg.empty();
		pastGuesses = [];
		guesses =9;
		var winscore= $("#winscore");
		winscore.html(wins);
		var guessesleft= $("#guessscore");
		guessesleft.html(guesses);
		;

		

	}


}





console.log(gameChoice);
document.onkeyup = function(event) {
	var userGuess = (event.key);
	console.log(userGuess);
	console.log(wins);
	console.log(guesses);
	console.log(gameChoice);
	pastGuesses.push(userGuess);
	console.log(pastGuesses);






if (userGuess === gameChoice) {
	game.ifGuessIsRight();
	var winscore= $("#winscore");
	winscore.html(wins);
	var guessesleft= $("#guessscore");
	guessesleft.html(guesses);
	var pg = $("#pastguesses");
	pg.empty();

	
	
}

if (userGuess !== gameChoice) {
	game.ifGuessIsWrong();
	var winscore= $("#winscore");
	winscore.html(wins);
	var guessesleft= $("#guessscore");
	guessesleft.html(guesses);
	var pg = $("#pastguesses");
	pg.html(pastGuesses);
} 



if(guesses === 0) {
	var pg = $("#pastguesses");
	pg.empty();
	game.gameLost();
	var winscore= $("#winscore");
	winscore.html(wins);
	

}
};

var winscore= $("#winscore");
winscore.html(wins);


var guessesleft= $("#guessscore");
guessesleft.html(guesses);


var pg = $("#pastguesses");
	pg.html(pastGuesses);


