

var computerChoice = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var guesses = 9;
var wins = 0;
var gameChoice=computerChoice[Math.floor(Math.random()*computerChoice.length)];


var game = {
	
	ifGuessIsRight: function() {
		
		wins++;
		guesses = 9;
		var gameChoice=computerChoice[Math.floor(Math.random()*computerChoice.length)];
		console.log(gameChoice);
		alert("You were right!");
		
		document.onkeyup = function(event) {
		var userGuess = (event.key);
		console.log(userGuess);





		if (userGuess === gameChoice) {
		game.ifGuessIsRight();
		var winscore= $("#winscore");
		winscore.html(wins);
		var guessesleft= $("#guessscore");
		guessesleft.html(guesses);



}

		else if (userGuess !== gameChoice) {
		game.ifGuessIsWrong();
		var winscore= $("#winscore");
		winscore.html(wins);
		var guessesleft= $("#guessscore");
		guessesleft.html(guesses);


} 



else if (guesses === 0) {
	game.gameLost();
	var winscore= $("#winscore");
	winscore.html(wins);
	var guessesleft= $("#guessscore");
	guessesleft.html(guesses);



}
}
},
	
	ifGuessIsWrong: function(){
		guesses --

		if (guesses===0) {
		game.gameLost();
		var winscore= $("#winscore");
		winscore.html(wins);
		var guessesleft= $("#guessscore");
		guessesleft.html(guesses);




		}
	},

	gameLost: function(){
		alert("You Lose!");
		guesses =9;
		var winscore= $("#winscore");
		winscore.html(wins);
		var guessesleft= $("#guessscore");
		guessesleft.html(guesses);


	}


}





console.log(gameChoice);
document.onkeyup = function(event) {
	var userGuess = (event.key);
	console.log(userGuess);
	console.log(wins);
	console.log(guesses);
	console.log(gameChoice);



if (userGuess === gameChoice) {
	game.ifGuessIsRight();
	var winscore= $("#winscore");
	winscore.html(wins);
	var guessesleft= $("#guessscore");
	guessesleft.html(guesses);
	
}

if (userGuess !== gameChoice) {
	game.ifGuessIsWrong();
	var winscore= $("#winscore");
	winscore.html(wins);
	var guessesleft= $("#guessscore");
	guessesleft.html(guesses);
} 



if(guesses === 0) {
	game.gameLost();
	var winscore= $("#winscore");
	winscore.html(wins);
}
};


var winscore= $("#winscore");
winscore.html(wins);

var guessesleft= $("#guessscore");
guessesleft.html(guesses);



