
let relaodButton = document.getElementById('reloadButton')
let relaodButtonImg = document.querySelector('#reloadButton img')

relaodButton.addEventListener('click', clickedReload)

function clickedReload() {

	relaodButtonImg.style.animation = 'mean 10s'

	setTimeout(function () {
		relaodButtonImg.style.animation = '0'
		location.reload()
	}, 1000)
}



function Quiz(questions) {
	this.score = 0;
	this.questions = questions;
	this.qIndex = 0;
}


Quiz.prototype.ended = function () {
	return this.questions.length === this.qIndex;
}

Quiz.prototype.guess = function (answer) {

	if (this.getqIndex().correctAnswer(answer)) {
		alert("Correct!")
		this.score++;
	}
	else {
		alert("WRONG")

	}

	this.questionIndex++;

}
Quiz.prototype.getqIndex = function () {
	return this.questions[this.qIndex]
}








function Question(text, choices, answer) {
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.correctAnswer = function (choice) {

	return choice === this.answer;
}






function populate() {
	if (quiz.ended()) {
		showScores();
		return;
	} 
		var element = document.getElementById('question');
		element.innerHTML = quiz.getqIndex().text;

		//show choices
		var choices = quiz.getqIndex().choices;
		for (let i = 0; i < choices.length; i++) {
			var element = document.getElementById('spanChoice' + i);
			element.innerHTML = choices[i];

			guess("choice" + i, choices[i]);
		}

		showProgress();
	
}


function guess(id, guess) {
	let button = document.getElementById(id);
	button.onclick = function () {
		quiz.guess(guess);
		populate();
	}
}


function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById('progress');
	element.innerHTML = "Questions " + currentQuestionNumber + " of " + quiz.questions.length;
}


function showScores() {
	var gameOverHTML = `
            <div class="top">

		<button id='reloadButton' type='button'>
			<img src='reload.png' id='reloadImg' />
                </button >

		<h1>Quiz</h1>

            </div>

		<hr style='margin-bottom: 20px'>
					<h1> Result </h1>`



	gameOverHTML += "<h2 id='score' style='color: red'> Total Score: " + quiz.score + "</h2>";
	var element = document.getElementById('quiz');
	element.innerHTML = gameOverHTML;
	relaodButton = document.getElementById('reloadButton')
	relaodButtonImg = document.querySelector('#reloadButton img')
	relaodButton.addEventListener('click', clickedReload)

}


var questions = [
	new Question("What is the value of pi?", ["3", "3.1", "3.14", "3.141"], "3.141"),
	new Question("Choose", ["Dentures", "Rainbow", "Banana", "No"], "Dentures"),
	new Question("Who is Diamond's business manager?", ["Russalia", "Wesleyan", "Bente", "Joselita"], "Bente"),
	new Question("Name the muse of the section 8-Diamond 2023-2024?", ["Gabriela", "Josephina", "Seong Thea", "Princess"], "Josephina"),
	new Question("Which one is part of the Diamond's officers", ["Ecija", "Jimenez", "Marcelo", "Santos"], ""),
	new Question("How many holes are in a POLO", ["3", "4", "6", "5"], "3"),
	new Question("Which one of the following is going to Baguio for ASMEPPS", ["Ma'am Sandie", "Ma'am Viray", "Ma'am Kashieca", "Ma'am Palafox"], ""),
	new Question("Is liquid compressible?", ["Yes", "No", "Sometimes", "Ma'am Sandie"], "Ma'am Sandie"),
	new Question("Who wrote The Travels of Marco Polo?", ["Jean René Lacoste", "China and Persia", "Marco y Polo", "None of the above"], "None of the above"),
	new Question("Which of the following are SPJ sections", ["Pearl", "Researchers", "Discoverers", "Diamond"], "Diamond"),
];

var quiz = new Quiz(questions);

populate();