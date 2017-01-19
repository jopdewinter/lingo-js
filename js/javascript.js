function Game() {
	var randomWord;

	this.start = function () {
		randomWord = words[Math.floor(Math.random() * 479)];
		console.log(randomWord);
	}

	this.check = function () {
			var varRWord = "appel";
			var	varUWord = "aepes";
			var derp = [];

		    if (varRWord == varUWord) {
      		console.log(11);
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
var game = new Game();

(function() {
	game.start();
})();