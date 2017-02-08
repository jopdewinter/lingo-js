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

      for (var i = 0; i < 5; i++) {
        document.getElementById('letter'+i).innerHTML = varUWord.charAt(i);
        
      }

		    if (varRWord == varUWord) {
      			for (var i = 0; i < 5; i++) {
      				document.getElementsByClassName('letter')[i].style.background = "#15ff00";
      			}
      			alert("Goed gedaan!");
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
      for (var i = 0; i < 5; i++) {
          if(derp[i] == 1) {
            document.getElementsByClassName('letter')[i].style.background = "#15ff00";
          }
          if(derp[i] == 2) {
            document.getElementsByClassName('letter')[i].style.background = "#eeff00";
          }
         }
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