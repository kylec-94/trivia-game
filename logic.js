$(document).ready(function(){

	
	var correct = 0;

	$('#correctAnswer').text("Correct: " + correct);

	var incorrect = 0;

	$('#incorrectAnswer').text("Incorrect: " + incorrect);

	var noAnswer = 0;

	$('#unanswered').text("Unanswered: " + noAnswer);

	var questionArray = ["<h4>What city is Malaa from?</h4>", "What is Tchami's label called?", "Where are Tchami and Malaa playing on December 9th?"];

	var answerArray = [["<p><ol><li>Paris</li><li>Melbourne</li><li>Sydney</li><li>Detroit</li></ol></p>"], ["Confession","Merlo","Zoo Animals","Tucked Up"], ["Los Angeles","Chicago","Cleveland","Columbus"]];

	var buttonOne = '<button id="button-one">Answer One</button>';

	var buttonTwo = '<button id="button-two">Answer Two</button>';

	var buttonOneClicked = $('#button-one').on('click');

	var buttonOneClicked = false;

	// var questionThree = 

	// var questionFour =
	var counter = 30;
	
	function timer() {
		gameClock = setInterval(questionTime, 1000);
			function questionTime() {
			
			if (counter === 0) {
				clearInterval(gameClock);
				addLossFromTimeOut();
				}
		
			if (counter > 0) {
				counter--;
				}
		
			$("#timer").html('<p>Remaining Time: ' + counter + '</p>');
		}
	}

	function addLossFromTimeOut() {
		noAnswer++;
		setTimeout(wait, 1000);
	}
	
	var buttons = [];

	function createButtons(){
			$('#buttonBox').append(buttons);
				
			
		};

	// when the 'Start' button is clicked, 
	$('#startButton').on('click', function(){
		console.log("clicked");
		$('#textBox').empty();
		$('#buttonBox').empty();
		$('#textBox').prepend(questionArray[0]);
		$('#textBox').append(answerArray[0]);
		createButtons();
		timer();

		if (buttonOneClicked == true){
			alert("You are correct!");
			correct++;
		} else if (buttonOneClicked != true){
			alert("Wrong!");
			incorrect++;
		}
	});



	

	


		




	


});
