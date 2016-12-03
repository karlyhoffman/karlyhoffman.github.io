console.log('Linked');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var lives = 7; 
var score = 0;
// var level = 1;

var horses = [];

// var audio = new Audio('sounds/horseChristopher.mp3');

var img = new Image();
img.src = "images/blueHorse.png";

var img2 = new Image();
img2.src = "images/greenHorse.png";

var img3 = new Image();
img3.src = "images/orangeHorse.png";

var img4 = new Image();
img4.src = "images/pinkHorse.png";

var img5 = new Image();
img5.src = "images/purpleHorse.png";

var img6 = new Image();
img6.src = "images/redHorse.png";

var img7 = new Image();
img7.src = "images/yellowHorse.png";

// Image needs to load first, then .addHorse() from constructor
function horseImageDraw(horse, image){
	image.onload = horse.addHorse(image);
}

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

function setCanvasSize() {
	console.log("This is the window width: " + window.innerWidth);
	if ( window.innerWidth > 800 ) {
		console.log("No need to change canvas size.")
	} else if ( window.innerWidth > 670 ){
		canvasWidth = 670;
		canvasHeight = 436;
		console.log("This is the new canvas width: " + canvasWidth);
	} else if ( window.innerWidth < 670 ) {
		canvasWidth = 560;
		canvasHeight = 364;
		console.log("This is the new canvas width: " + canvasWidth);
	}
}
setCanvasSize();


function Horse() {
	horses.push(this);
	var base = this;
	// Starting horse coordinates
	if ( canvasWidth === 800 ) {
		this.xCoor = (Math.floor(Math.random() * 400) + 200); // Random x coordinate = # from 200 to 600
		this.yCoor = (Math.floor(Math.random() * 150) + 175); // Random y coordinate = # from 175 to 325
	} else if ( canvasWidth < 800 ) {
		this.xCoor = (Math.floor(Math.random() * 336) + 167); // Random x coordinate = # from 167 to 503
		this.yCoor = (Math.floor(Math.random() * 184) + 126); // Random y coordinate = # from 175 to 325
	} else if ( canvasWidth < 670 ) {
		this.xCoor = (Math.floor(Math.random() * 224) + 168); // Random x coordinate = # from 168 to 392
		this.yCoor = (Math.floor(Math.random() * 146) + 109); // Random y coordinate = # from 109 to 255
	};

	this.randomXDirection = (Math.random() * 2 - 1) * 1.5, // Random # from -1.5 to 1.5
	this.randomYDirection = (Math.random() * 2 - 1) * 1.5,

 	this.addHorse = function(image) {
 		ctx.drawImage(image, base.xCoor, base.yCoor); 
	},

	this.horsePath = function(){
		base.xCoor += base.randomXDirection;
		base.yCoor += base.randomYDirection;
	},
	// Area of horse img depending on different canvas sizes
	this.currentXCoorMax = function(){
		return base.xCoor + 60;

	},
	this.currentYCoorMax = function(){
		return base.yCoor + 60;

	},
	this.switchDirectionsListener = function() {
		canvas.addEventListener('click', function(e){
			var trueX = e.pageX - ctx.canvas.offsetLeft;
			var trueY = e.pageY - ctx.canvas.offsetTop;
			// console.log(trueX);
			// console.log(trueY);
			if ( trueX >= base.xCoor
				&& trueX <= base.currentXCoorMax()
				&& trueY >= base.yCoor
				&& trueY <= base.currentYCoorMax()
			   ) {
				base.randomXDirection *= -1.125 ;
				base.randomYDirection *= -1.125 ;

				// audio.play();
				score +=10;
				document.getElementById("scoreText").innerHTML = score;
				// checkLevel();				
			};
		});
	},

	this.checkBound = function(){
		if (base.xCoor < canvas.width && base.yCoor < canvas.height
			&& base.yCoor > -65 && base.xCoor > -65) { 
			// return true 
		}
		// lose life if not within canvas borders:
		else {
			// Remove out-of-bounds horse from array, lose life
			for (var i = 0; i < horses.length; i++) {
				if (horses[i] === base) {
					var index = horses.indexOf(base)
					horses.splice(index, 1);
					lives--
					document.getElementById("livesText").innerHTML = lives;
				};
			};
		};
	}
};

var horseOne = new Horse();
var horseTwo = new Horse();
var horseThree = new Horse();
var horseFour = new Horse();
var horseFive = new Horse();
var horseSix = new Horse();
var horseSeven = new Horse();


horseOne.switchDirectionsListener();
horseTwo.switchDirectionsListener();
horseThree.switchDirectionsListener();
horseFour.switchDirectionsListener();
horseFive.switchDirectionsListener();
horseSix.switchDirectionsListener();
horseSeven.switchDirectionsListener();


function animate(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	horseImageDraw(horseOne, img);
	horseImageDraw(horseTwo, img2);
	horseImageDraw(horseThree, img3);
	horseImageDraw(horseFour, img4);
	horseImageDraw(horseFive, img5);
	horseImageDraw(horseSix, img6);
	horseImageDraw(horseSeven, img7);
	horseOne.horsePath();
	horseTwo.horsePath();
	horseThree.horsePath();
	horseFour.horsePath();
	horseFive.horsePath();
	horseSix.horsePath();
	horseSeven.horsePath();


	horseOne.checkBound();
	horseTwo.checkBound();
	horseThree.checkBound();
	horseFour.checkBound();
	horseFive.checkBound();
	horseSix.checkBound();
	horseSeven.checkBound();

	// console.log(horses);

	// Change to number of lives, once levelUp() is working
	if (horses.length > 0) {
		window.requestAnimationFrame(animate)
	} else {
		// document.getElementById("livesText").innerHTML = "GAME OVER."
		var h3 = document.createElement('h3');
		h3.innerHTML = 'GAME OVER';
		h3.classList.add('blink');
		document.body.appendChild(h3);
	};

};
animate();
