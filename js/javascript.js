function Test(name, id, age) {
	this.name = name;
	this.id = id;
	this.age = age;
}

function Game() {
	var randomWord;

	this.start = function () {
		randomWord = words[Math.floor(Math.random() * 479)]
	}
	this.test = function () {
		console.log(randomWord)
		console.log(document.getElementById("zaad").value)
	}
}

var game =  new Game();

(function() {
	game.start();
})()