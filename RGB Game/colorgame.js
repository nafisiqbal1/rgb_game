var numSquares = 6;

var colors = generateRandomcolors(numSquares)

var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();

var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

var messageDisplay = document.querySelector("#message");

var h1 = document.querySelector("h1");

var resetbutton = document.querySelector("#reset");

var easybtn = document.querySelector("#easybtn");

var hardbtn = document.querySelector("#hardbtn");

var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		if(this.textContent === "Easy"){
			numSquares = 3;
		} else {
			numSquares = 6;
		}

		reset();

		// figure out how many squares to show
		// pick new colors
		// pick a new picked color
		// update page to reflect changes
	});
}

function reset(){
	// generate random colors
	colors = generateRandomcolors(numSquares);
	// pick a random color
	pickedColor = pickColor();

	messageDisplay.textContent = ""
	resetbutton.textContent = "New Colors"
	// change colorDiplay to match the pickedColor
	colorDisplay.textContent = pickedColor;
	// change colors of squares
	for(var i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		;
	}
	h1.style.background = "steelblue";

}


// hardbtn.addEventListener("click", function(){
// 	hardbtn.classList.add("selected");
// 	easybtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomcolors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0; i<squares.length; i++){
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 	}
// });

// easybtn.addEventListener("click", function(){
// 	hardbtn.classList.remove("selected");
// 	easybtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomcolors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0; i<squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		} else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });


resetbutton.addEventListener("click", function(){

	reset();
	// // generate random colors
	// colors = generateRandomcolors(numSquares);
	// // pick a random color
	// pickedColor = pickColor();

	// messageDisplay.textContent = ""
	// resetbutton.textContent = "New Colors"
	// // change colorDiplay to match the pickedColor
	// colorDisplay.textContent = pickedColor;
	// for(var i = 0; i<squares.length; i++){
	// 	squares[i].style.backgroundColor = colors[i];
	// }
	// h1.style.background = "steelblue";
});

for(var i = 0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct"
			messageDisplay.style.color = "#232323"
			resetbutton.textContent = "Play Again?"
			colorChange(clickedColor);
			h1.style.background = clickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.style.color = "#232323"
			messageDisplay.textContent = "Try Again"

		}

	});
}



function colorChange(color){
	for(var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomcolors(num){
	// create an array
	var arr=[];
	// add num random colors to arrayusing loop
	for(var i = 0; i<num; i++){
		// get random color and push into array
		arr.push(randomColor());
	}
	// return array
	return arr;
}

function randomColor(){
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r +", " + g +", " + b + ")";
}

