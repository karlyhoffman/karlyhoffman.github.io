console.log('Linked');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var lives = 7; 
var score = 0;
var level = 1;

var horses = [];


var img = new Image();
img.src = "images/evenSmallerHorse.png";

var img2 = new Image();
img2.src = "images/evenSmallerHorse.png";

var img3 = new Image();
img3.src = "images/evenSmallerHorse.png";

var img4 = new Image();
img4.src = "images/evenSmallerHorse.png";

var img5 = new Image();
img5.src = "images/evenSmallerHorse.png";

var img6 = new Image();
img6.src = "images/evenSmallerHorse.png";

var img7 = new Image();
img7.src = "images/evenSmallerHorse.png";


function horseImageDraw(horse, image){
	image.onload = horse.addHorse(image);
}

function Horse() {
	horses.push(this);
	var base = this;

	this.xCoor = (Math.floor(Math.random() * 400) + 200), //Random x coordinate = # from 200 to 600
	this.yCoor = (Math.floor(Math.random() * 150) + 175), //Random y coordinate = # from 175 to 325

	this.randomXDirection = (Math.random() * 2 - 1) * 1.5, 
	this.randomYDirection = (Math.random() * 2 - 1) * 1.5,

 	this.addHorse = function(image) {
 		ctx.drawImage(image, base.xCoor, base.yCoor); 
	},

	this.horsePath = function(){
		base.xCoor += base.randomXDirection;
		base.yCoor += base.randomYDirection;
	},

	this.currentXCoorMax = function(){
		return base.xCoor + 55;
	},
	this.currentYCoorMax = function(){
		return base.yCoor + 50;
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
				base.randomXDirection *= -1.25 ;
				base.randomYDirection *= -1.25 ;

				score +=10;
				document.getElementById("scoreText").innerHTML = score;
				// checkLevel();				
			};
		});
	},

	this.checkBound = function(){
		if (base.xCoor < canvas.width && base.yCoor < canvas.height
			&& base.yCoor > -61 && base.xCoor > -55) { 
			return true 
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



