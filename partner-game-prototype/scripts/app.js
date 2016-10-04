console.log("Linked.");

var cities = [
	'Los Angeles, CA',
	'Phoenix, AZ',
	'Grand Canyon, AZ',
	'Albuquerque, NM',
	'Amarillo, TX',
	'Tulsa, OK',
	'St. Louis, MO',
	'Chicago, IL'
];

var days = {
	dayCounter: 0,
	addDay: function(num) {
		this.dayCounter += num ;
		$('#days article').children('p').text(this.dayCounter);
		return;
	}
};

var cost = {
	costCounter: 0,
	addCost: function(num) {
		this.costCounter += (75 * num);
		$('#cost article').children('p').text("$" + this.costCounter);
		return;
	}
};

var questionList = [
	//Now displayed when page loads, changing other index values 
	// "You're finally on your way to General Assembly in Chicago! But first, Vegas?",
	//[0]
	"You stop at the Grand Canyon. It's so beautiful. Want to camp there to see a sunrise or two?",
	//[1]
	"You see a sign in Albuquerque for hot air balloon rides. Curious what the city will look like from above?",
	//[2]
	"While in Amarillo you had the best BBQ meal you've ever had. Stay in the area longer to get more of that delicious smoked meat?",
	//[3]
	"You had no idea there were so many buffalo in Tulsa! Chase more of them down for an epic instagram post?",
	//[4]
	"Everywhere you go in St. Louis you see the famous Arch. Want to see what the city looks like in it?",
	//[5]
	"Chicago at last! Want to celebrate with a drink high in the sky at 360 Chicago's Bar?"
];

var maps = [
	//[0]
	"images/Map2Y.png",
	//[1]
	"images/Map3.png",
	//[2]
	"images/Map4.png",
	//[3]
	"images/Map5.png",
	//[4]
	"images/Map6.png",
	//[5]
	"images/Map7.png",
	//[6]
	"images/Map8a-01.png",
];

$('#questions').hide();
$('#days ').hide();
$('#cost').hide();

//Work In-Progress JavaScript
var buttonCount = -2;

function displayQuestion() {
	$('#questions').children('p').text(questionList[buttonCount]);
};

$('button').click( function(){
	buttonCount += 1;
	$('#questions').show();
	$('#days ').show();
	$('#cost').show();
	displayQuestion();
	displayMap();
	displayResults();
});

$('#instructions').click(function() {
	$('#instructions').hide();
});

$('#results').hide();


///////// DAYS/COUNTER COUNTER /////////////
$('#yes').click( function(){
	var randomNum = Math.floor(Math.random() * 4) + 1;
	days.addDay(randomNum);
	cost.addCost(randomNum);
	// console.log(randomNum);
});

$('#no').click( function(){
	var randomNum = Math.floor(Math.random() * 2) + 1;
	days.addDay(randomNum);
	cost.addCost(randomNum);
	// console.log(randomNum);
});

function displayMap() {
$("#maps").each(function(index){
    $(this).find('img').attr("src", maps[buttonCount]);
});
};

function displayResults() {
	if (buttonCount < 6) {
		$('#results').hide();
	} else {
		$('#questions').hide();
		$('#daysResult').text(days.dayCounter);
		$('#costResult').text("$" + cost.costCounter);
		$('#results').show();
		$('#days').hide();
		$('#cost').hide();
		$('#restart').on('click', function(){
			location.reload();
		});
	};
};





//BUTTON COUNT ATTEMPT
// var buttonCount = 0;

// $('button').click( function(){
// 	buttonCount += 1;
// 	buttonCountCheck();
// });

// function buttonCountCheck() {
// 	if ( buttonCount === 1 ) {
// 		$('#questions').children('p').text(questionList[0]);
// 		$('#yes').click( function(){
// 				days.addDay(2);
// 		});
// 		$('#no').click( function(){
// 				days.addDay(1);
// 		});
// 	} else if ( buttonCount === 2) {
// 		$('#questions').children('p').text(questionList[1]);
// 		$('#yes').click( function(){
// 				days.addDay(2);
// 		});
// 		$('#no').click( function(){
// 				days.addDay(1);
// 		});
// 	} else if ( buttonCount === 3) {
// 		$('#questions').children('p').text(questionList[2]);
// 		$('#yes').click( function(){
// 				days.addDay(2);
// 		});
// 		$('#no').click( function(){
// 				days.addDay(1);
// 		});
// 	}  else if ( buttonCount === 4) {
// 		$('#questions').children('p').text(questionList[3]);
// 		$('#yes').click( function(){
// 				days.addDay(2);
// 		});
// 		$('#no').click( function(){
// 				days.addDay(1);
// 		});
// 	} else if ( buttonCount === 5) {
// 		$('#questions').children('p').text(questionList[4]);
// 		$('#yes').click( function(){
// 				days.addDay(2);
// 		});
// 		$('#no').click( function(){
// 				days.addDay(1);
// 		});
// 	}  else if ( buttonCount === 6) {
// 		$('#questions').children('p').text(questionList[5]);
// 		$('#yes').click( function(){
// 				days.addDay(2);
// 		});
// 		$('#no').click( function(){
// 				days.addDay(1);
// 		});
// 	} else if ( buttonCount === 7) {
// 		$('#questions').children('p').text(questionList[6]);
// 		$('#yes').click( function(){
// 				days.addDay(2);
// 		});
// 		$('#no').click( function(){
// 				days.addDay(1);
// 		});
// 	}else {
// 	};
// };

//LOOP ATTEMPT
// var questions = {
// 	askQuestion: function() {
// 		for (var i = 0 ; i < questionList.length ; i++ ) ){
//     		$('#questions').children('p').text(questionList[i]);
//     		if ( $('#yes').click ) {
// 			   days.addDay(2);
// 			} else if ( $('#no').click ) {
// 			   days.addDay(1);
// 			} else {
// 			}
//   	});
// 	}
// }

//ANOTHER LOOP ATTEMPT
// var questions = {
// 	askQuestion: function() {
// 		$.each(questionList, function( i, value ){
//     		$('#questions').children('p').text( value );
//     		if ( $('#yes').click ) {
// 			   days.addDay(2);
// 			} else if ( $('#no').click ) {
// 			   days.addDay(1);
// 			} else {
// 			   //run function2
// 			}
//   		});
// 	}
// }

//EXTRA NOTES
// no vegas = Math.floor(Math.random() * 2)
// yes vegas  = Math.floor(Math.random() * 4)

// var yes =function randomYesNumber() {
// 	return Math.floor(Math.random() * 3) + 1;
// };

//  var no = function randomNoNumber() {
// 	return Math.floor(Math.random() * 5) + 1;
// };



