
var buttonAElement = document.getElementById('swap-btn-a');
var buttonBElement = document.getElementById('swap-btn-b');
var playerAElement = document.getElementById('timer-a');
var playerBElement = document.getElementById("timer-b");
var startElement = document.getElementById("btn-start");
var pluseElement = document.getElementById("btn-plus");
var ruleElement = document.getElementById("btn-rule");
var minusElement = document.getElementById("btn-minus");
var resetElement =document.getElementById("reset-btn");
var pauseElement = document.getElementById("btn-pause");

// var setTimeElement = document.getElementById("settime");
// var submitTimeElement = document.getElementById("submit-time");

var start = false;
var	pause = false;
var	playerA = false;
var	playerB = false;
var buttonA = false;
var buttonB = false;
var resetButton = false;

// start button
startElement.addEventListener("click",function(){
	start = true;
	playerA = true;
});

// pause button
pauseElement.addEventListener("click" ,function(){
	pause =! pause;
	if(start){
		pauseElement.innerText = (pause == true) ? "PLAY":"PAUSE";
	}
});

// button-A
buttonAElement.addEventListener("click", function(){
	buttonB = true;
	playerA = false;
	playerB = true;
});

// button-B
buttonBElement.addEventListener("click", function(){
	playerA =true;
	playerB = false;
	buttonB=false;
});
// reset button
resetElement.addEventListener("click", function(){
	start = false;
	playerB = false;
	minuteA = 10;
	secondA = 60;
	minuteB = 10;
	secondB = 60;
	playerAElement.value = `${parse(minuteA)}:${parse(secondA)}`;
	playerBElement.value = `${parse(minuteB)}:${parse(secondB)}`;

});

/*submitTimeElement.addEventListener("click",function(){
	var getTime = setTimeElement.value;	
});*/

var minuteA = 10;
var secondA = 60;

// player A

var firstPlayer= function(){
	if(start && !pause){
		if(playerA){
			secondA--;
			playerAElement.value = `${parse(minuteA)}:${parse(secondA)}`;
			
			if(secondA == 0){
				secondA = 60;
				minuteA -=1;
				if(minuteA == -1){
					minuteA = 0;
					clearInterval(runTime);
				}
			}
		}
	}
}

// player B

var minuteB = 10;
var secondB = 60;

var secondPlayer = function(){
	if(buttonB && !pause || buttonA){
		if(playerB){
			secondB--;
			playerBElement.value = `${parse(minuteB)}:${parse(secondB)}`;
			if(secondB == 0){
				secondB = 60;
				minuteB--;
				if(minuteB == -1){
					clearInterval(runTime);
				}
			}
		}
	}
}
// add 0 to front of time (01)

function parse(value){
	if(value < 10){
		return "0"+value
	}else{
		return value
	}
}

var runTime = setInterval(firstPlayer,1000);
var runTime = setInterval(secondPlayer,1000);
