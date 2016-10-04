$(document).ready( function() {
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
	"images/Map2.png",
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

//Start Window:
$('#questions').hide();
$('#days ').hide();
$('#cost').hide();

$('#instructions').click(function() {
	$('#instructions').hide();
});

$('#results').hide();


//Functionality
var buttonCount = -2;

function displayQuestion() {
	$('#questions').children('p').text(questionList[buttonCount]);
};

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

$('button').click( function(){
	buttonCount += 1;
	$('#questions').show();
	$('#days ').show();
	$('#cost').show();
	displayQuestion();
	displayMap();
	displayResults();
});

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

});