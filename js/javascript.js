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

	this.check = function () {
		if (document.getElementById("input").value.length != 5) {
			alert("Het woord moet 5 letters bevatten")
		}
		if (document.getElementById("input").value == randomWord) {
			alert("Goed gedaan!")
		}
	}
	this.fillin = function () {
		for (var i = 1; i <= 5; i++) {
			document.getElementById("letter"+i).value = document.getElementById("input").value.charAt(i-1);
		}
	}
}

var game = new Game();

(function() {
	game.start();
})()