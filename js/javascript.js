function Game() {
	var randomWord;

	this.start = function () {
		randomWord = words[Math.floor(Math.random() * 479)];
		console.log(randomWord);
	}

	this.check = function () {
			var varRWord = (randomWord);
			var	varUWord = document.getElementById("input").value;
			var derp = [];

			if (document.getElementById("input").value.length != 5) {
				alert("Het woord moet 5 letters bevatten!");
			}

		    if (varRWord == varUWord) {
      		console.log(11);
      		alert("Goed gedaan!");
      		document.getElementById("restart").style.display = "inherit";
    		} else {
      		for (var i = 0; i < varRWord.length; i++) {
        		if (varRWord.charAt(i) == varUWord.charAt(i)) {
      			derp.push(1);
    		} else {
       			 if (varUWord.charAt(i) == varRWord.charAt(0) || varUWord.charAt(i) == varRWord.charAt(1) ||
            		varUWord.charAt(i) == varRWord.charAt(2) || varUWord.charAt(i) == varRWord.charAt(3) ||
            		varUWord.charAt(i) == varRWord.charAt(4)) {
              		derp.push(2);
            } else {
              derp.push(0);
            }
   		}
      }
      console.log(derp);
    }
  }
}

function restart() {
	location.reload();
}

var game = new Game();

(function() {
	game.start();
})();