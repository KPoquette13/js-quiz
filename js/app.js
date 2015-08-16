var correctAnswers;
var currentQuestion;
var currQuestData;

var questions = [{
		question:"Who is considered the richest character in the Marvel Universe?",
		choices:["Tony Stark","Black Panther","Dr. Doom","Reed Richards","Hank Pym"],
		correct: "Black Panther"
	},
	{
		question:"Which Guardians of the Galaxy character is related to the villain Thanos",
		choices:["Gamora", "Drax", "Starlord", "Rocket Raccoon", "Groot"],
		correct: "Gamora"
	},
	{
		question:"In the comic event 'Civil War', who leads the faction opposed to Iron Man?",
		choices:["Professor x", "Spiderman", "Ant-man", "Nick Fury", "Captain America"],
		correct: "Captain America"
	},
	{
		question:"Dr. Doom, common villain for the Fantastic Four, is the ruler of what fictional country?",
		choices:["Wakanda", "Asgard", "Latveria", "Midgard", "Untharis"],
		correct: "Latveria"
	},
	{
		question:"Blind lawyer Matt Murdock moonlights as an acrobatic martial-arts crime fighter as what character in the comics, movie and netflix series which shares his name?",
		choices:["Iron Fist", "Carnage", "Deadpool", "Daredevil", "Spiderman"],
		correct: "Daredevil"
	}];

function updatePanel(result){
	var panel;
	var resultClass;

	switch(currentQuestion){
		case 0:
			panel="#panel-one";
			if(result){
				resultClass="panel bp-c";
			} else {
				resultClass="panel bp-ic";
			}
			break;
		case 1:
			panel="#panel-two";
			if(result){
				resultClass="panel gotg-c clearfix";
			} else {
				resultClass="panel gotg-ic clearfix";
			}
			break;
		case 2:
			panel="#panel-three";
			if(result){
				resultClass="panel cap-c";
			} else {
				resultClass="panel cap-ic";
			}
			break;
		case 3:
			panel="#panel-four";
			if(result){
				resultClass="panel doom-c clearfix";
			} else {
				resultClass="panel doom-ic clearfix";
			}
			break;
		case 4:
			panel = "#panel-five";
			if(result){
				resultClass="panel-long dd-c clearfix";
			} else {
				resultClass="panel-long dd-ic clearfix";
			}
			break;
	}

	$(panel).removeClass().addClass(resultClass);
}

function updateFeedback(){
	$("#correct-num").text(correctAnswers);
	$("#q-num").text(currentQuestion + 1);
	if(currentQuestion === 4){
		$("#final-correct").text(correctAnswers);
		$("#total-q").text(currentQuestion + 1);
		$(".f-button").addClass("hidden");
		$(".feedback-text").addClass("hidden");
		$(".restart").removeClass("hidden");
		$(".restart-text").removeClass("hidden");
	}
	$(".q-area").addClass("hidden");
	$(".f-area").removeClass("hidden");
}

function checkAnswer(answer){
	var result = false;
	if(answer == currQuestData.correct){
		correctAnswers = correctAnswers + 1;
		$("#feedback-title").text("Correct!");
		result = true;
	}
	else{
		$("#feedback-title").text("Incorrect...");
	}
	updatePanel(result);
	updateFeedback();
}

function resetFeedback(){
	$(".feedback-text").removeClass("hidden");
	$(".f-button").removeClass("hidden");
	$(".restart").addClass("hidden");
	$(".restart-text").addClass("hidden");
	$("#final-correct").text();
	$("#total-q").text();
}

function updateQuestion(){
	//remove feedback and show question
	$(".q-area").removeClass("hidden");
	$(".f-area").addClass("hidden");
	$("#p-num").text(currentQuestion + 1);

	$(".question").text(currQuestData.question);
	$("#a-one").val(currQuestData.choices[0]).text(currQuestData.choices[0]);
	$("#a-two").val(currQuestData.choices[1]).text(currQuestData.choices[1]);
	$("#a-three").val(currQuestData.choices[2]).text(currQuestData.choices[2]);
	$("#a-four").val(currQuestData.choices[3]).text(currQuestData.choices[3]);
	$("#a-five").val(currQuestData.choices[4]).text(currQuestData.choices[4]);
}

function imageReset() {
	$("#panel-one").removeClass().addClass("panel money-back");
	$("#panel-two").removeClass().addClass("panel gotg-back clearfix");
	$("#panel-three").removeClass().addClass("panel cap-back");
	$("#panel-four").removeClass().addClass("panel doom-back clearfix");
	$("#panel-five").removeClass().addClass("panel-long dd-back clearfix");
}

function setUp(){
	correctAnswers = 0;
	currentQuestion = 0;
	currQuestData = questions[currentQuestion];
	resetFeedback();
	imageReset();
	updateQuestion();
}

$(document).ready(function() {
	setUp();

	$(".a-button").on('click', function() {
		var choice = $(this).val();
		checkAnswer(choice);
	});

	$(".f-button").on('click', function(){
		currentQuestion = currentQuestion + 1;
		currQuestData = questions[currentQuestion];
		updateQuestion();
	});

	$(".restart").on('click', function(){
		setUp();
	});

});