//function Test(name, id, age) {
//	this.name = name;
//	this.id = id;
//	this.age = age;
//}

//function Game() {
//	var randomWord;

//	this.start = function () {
//		randomWord = words[Math.floor(Math.random() * 479)]
//	}
//	this.test = function () {
//		console.log(randomWord)
//		console.log(document.getElementById("zaad").value)
//	}
//}

//var game = new Game();

//(function() {
//	game.start();
//})()

function Game() {
	var randomWord;

	this.start = function () {
		randomWord = words[Math.floor(Math.random() * 479)];
		console.log(randomWord);
	}
}

var game = new Game();

(function() {
	game.start();
})()

function Check() {
	var userWord = getElementById("input").value;
	if (userWord.length != 5) {
		alert("Het woord moet uit 5 letters bestaan")
	}
}