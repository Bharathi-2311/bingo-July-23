const questions = [
    {
        question: "How manay hours can be found in a day0 ?",
		generation: 1950,
        correctOption: "optionD"
    },
	{
        question: "How manay hours can be found in a day1 ?",
		generation: 1970,
        correctOption: "optionD"
    },
	{
        question: "How manay hours can be found in a day2 ?",
		generation: 1960,
        correctOption: "optionD"
    },
	{
        question: "How manay hours can be found in a day3 ?",
		generation: 1970,
        correctOption: "optionD"
    },
	{
        question: "How manay hours can be found in a day4 ?",
		generation: 1950,
        correctOption: "optionD"
    },
	{
        question: "How manay hours can be found in a day5 ?",
		generation: 1950,
        correctOption: "optionD"
    },
	{
        question: "How manay hours can be found in a day6 ?",
		generation: 1980,
        correctOption: "optionD"
    },
	{
        question: "How manay hours can be found in a day7 ?",
		generation: 1950,
        correctOption: "optionD"
    },
	{
        question: "How manay hours can be found in a day8 ?",
		generation: 1990,
        correctOption: "optionD"
    },
	{
        question: "How manay hours can be found in a day9 ?",
		generation: 1950,
        correctOption: "optionD"
    },
	{
        question: "How manay hours can be found in a day10 ?",
		generation: 1950,
        correctOption: "optionD"
    },
	{
        question: "How manay hours can be found in a day11 ?",
		generation: 1950,
        correctOption: "optionD"
    },
	{
        question: "How manay hours can be found in a day12 ?",
		generation: 1950,
        correctOption: "optionD"
    },

    {
        question: "Which is the longest river in the world13 ?",
		generation: 1960,
        correctOption: "optionA"
    },

    {
        question: "_____ is the hottest Continent on Earth14 ?",
		generation: 1970,
        correctOption: "optionC"
    },

    {
        question: "Which country is the largest in the world15 ?",
		generation: 1980,
        correctOption: "optionA"
    }
]

let shuffledQuestions = []
let resultrow = [];
let resultInTable = [];
let timeLeft = 300
let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let indexNumber = 0 //will be used in displaying next question
const timePassed = 1;
let answerStatus = false;
let loggedInGeneration = '';

function handleQuestions() { 
//function to shuffle and push 15 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 5) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random) && random.generation != loggedInGeneration) {
            shuffledQuestions.push(random)
        }
    }
}

function loadTableData() {
    const table = document.getElementById("testBody");
	let result = JSON.parse(localStorage.getItem("resultfromfirstpage"));
	document.getElementById('final-score-value').innerHTML = localStorage.getItem("TotalScore");
	for(let i=0;i<result.length;i++)
	{
      let row = table.insertRow();
      let sNo = row.insertCell(0);
      sNo.innerHTML = result[i][0];
      let question = row.insertCell(1);
      question.innerHTML = result[i][1];
	  let generation = row.insertCell(2);
      generation.innerHTML = result[i][2];
	  let time = row.insertCell(3);
      time.innerHTML = result[i][3];
	  let score = row.insertCell(4);
      score.innerHTML = result[i][4];
	}
}

function showDetailedReport()
{
	localStorage.setItem("resultfromfirstpage", JSON.stringify(resultInTable));
		localStorage.setItem("TotalScore", playerScore);
	window.location.href = "/bingo-July-23/resultpage.html";

}

function welcomeTeam()
{
	loggedInGeneration = localStorage.getItem("loggedInGeneration");
	if(loggedInGeneration === '1950')
	{
	loggedInGeneration = 1950
	document.getElementById('welcome-team').innerHTML = "OLD IS GOLD";
	}
	else if(loggedInGeneration === '1960')
	{
	loggedInGeneration = 1960
	document.getElementById('welcome-team').innerHTML = "THAANA SERNDHA KOOTAM";
	}
	else if(loggedInGeneration === '1980A')
	{
	loggedInGeneration = 1980	
	document.getElementById('welcome-team').innerHTML = "MAGALIR MATTUM";
	}
	else if(loggedInGeneration === '1980B')
	{
	loggedInGeneration = 1980
	document.getElementById('welcome-team').innerHTML = "NANGA ROMBA BUSY";
	}
	else if(loggedInGeneration === '1990')
	{
	loggedInGeneration = 1990
	document.getElementById('welcome-team').innerHTML = "YETHAYUM THANGUM 90'S";
	}
	
}

function startQuiz()
{
	localStorage.clear();
	if(document.getElementById('user-generation').value === '')
	{
		document.getElementById('user-generation').style.borderBlockColor='red';
		setTimeout(() => {
				document.getElementById('user-generation').style.borderBlockColor='';
            }, 2000)
	}
	else
	{
	localStorage.setItem("loggedInGeneration", String(document.getElementById('user-generation').value));
	window.location.href = "/bingo-July-23/quizpage.html";
	}
}

// function for displaying next question in the array to dom
//also handles displaying quiz information to dom
function NextQuestion(index) {
	resultrow = [];
	welcomeTeam();
    handleQuestions();
    const currentQuestion = shuffledQuestions[index];
    document.getElementById("question-number").innerHTML = questionNumber;
	resultrow.push(questionNumber);
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("display-question").innerHTML = currentQuestion.question;
	resultrow.push(currentQuestion.question);
	document.getElementById("question-genration").innerHTML = currentQuestion.generation;
	resultrow.push(currentQuestion.generation);
	startTimer();
}

// function for displaying End score at the QUIZ header
function endScore()
{
	    document.getElementById("player-score").innerHTML = playerScore;
}

// function to check if the answer is right or wrong
function checkForAnswer() 
{
    const currentQuestion = shuffledQuestions[indexNumber]; //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption; //gets current Question's answer
	const generationDiffScore = (currentQuestion.generation - loggedInGeneration)/10;
    const option = document.getElementById("user-ans");

    //checking to make sure an answer is entered or not 
    if (option.value === '') {
            document.getElementById('user-ans').style.borderBlockColor='red'
    }

    //checking if answer entered is correct and set border colour accordingly
        if (option.value.toUpperCase() === currentQuestionAnswer.toUpperCase()) {
            document.getElementById('user-ans').style.borderBlockColor='green'
			var timeLeftToAnswer = TimeTakenToAnswer();
			if(timeLeft != 0)
			{
				playerScore = playerScore + (timeLeftToAnswer+ Math.abs(generationDiffScore))*5; //adding to player's score
					resultrow.push((timeLeftToAnswer+ Math.abs(generationDiffScore))*5);
            }
			else
			{
				playerScore = playerScore + Math.abs(generationDiffScore)*5;
					resultrow.push(Math.abs(generationDiffScore)*5);
			}
			indexNumber++; 
			clearInterval(timerInterval);
            setTimeout(() => {
                questionNumber++
            }, 1000)
			setTimeout(() => {
				unCheckRadioButtons()
            }, 1000)
			
			answerStatus = true;
        }
		
		//checking if answer entered is incorrect and set border colour accordingly
        else if (option.value != '' && option.value.toUpperCase() !== currentQuestionAnswer.toUpperCase()) {
            document.getElementById('user-ans').style.borderBlockColor='red'
        }
}

// Formats the time in Minutes:Seconds format
function formatTimeLeft(time) 
	{
		const minutes = Math.floor(time / 60);  
		// Seconds are the remainder of the time divided by 60 (modulus operator)
		let seconds = time % 60;
		  
		// If the value of seconds is less than 10, then display seconds with a leading zero
		if (seconds < 10) 
		{
			seconds = `0${seconds}`;
		}

		// The output in MM:SS format
		return `${minutes}:${seconds}`;
	}
 
 // Time left still for the answer. 
 function TimeTakenToAnswer() 
	{
	  if(timeLeft != 0)
	  {
		resultrow.push(document.getElementById("base-timer-label").innerHTML);
		return Math.floor(timeLeft / 60) +1;
	  }
	  resultrow.push(0);
	  return 0;
	}
 
 // Starts the timer 
function startTimer() 
	{
	timeLeft = 300;
	timerInterval = setInterval(() => {
    
    timeLeft = timeLeft - timePassed;
	if(timeLeft < 0)
	{
	 timeLeft = 0;	
	 // The time left label is updated to ZERO 
	 document.getElementById("base-timer-label").innerHTML = "0:00";
	 clearInterval(timerInterval);
	}
	
	 // The time left label is updated
     document.getElementById("base-timer-label").innerHTML = formatTimeLeft(timeLeft);
	}, 1000);
	}


//called when the next button is called
function handleNextQuestion() 
	{
	answerStatus = false;
    checkForAnswer() //check if player picked right or wrong option
	setTimeout(() => {
	resetOptionBackground();
	}, 1000);
    
	//delays next question displaying for a second just for some effects so questions don't rush in on player
	if(answerStatus)
	{
		 if (!resultInTable.includes(resultrow)) {
            resultInTable.push(resultrow);
        }
		setTimeout(() => {
        if (indexNumber <= 5) {
			//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber);	
        }
        else {
			endScore();
            handleEndGame(); //ends game if index number greater than 9 meaning we're already at the 10th question
        }
	}, 1000);
	}
	}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() 
	{
    const option = document.getElementById("user-ans");
    document.getElementById(option.id).style.borderBlockColor = "";
	}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() 
	{
    const option = document.getElementById("user-ans");
    option.value = '';
	}

// function for when all questions being answered
function handleEndGame() 
	{
    //data to display to score board
    document.getElementById('overall-score').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"
	}
