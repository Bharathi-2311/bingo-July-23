const questions = [
    {
        question: "This object was first successfully launched (intentionally placed) in Earth’s orbit. It orbited for three weeks and began the space race and the space age. What was it named ?",
		generation: 1950,
        correctOption: "sputnik"
    },
	{
        question: "This style of western music became famous in later decades. Elvis is commonly known for this genre",
		generation: 1950,
        correctOption: "rock and roll"
    },
	{
        question: "This is a highly infectious disease, mostly affecting young children that attacks nervous system. Successful vaccination for it was found in 1950s and this work was awarded with Nobel prize.",
		generation: 1950,
        correctOption: "polio"
    },
	{
        question: "In late 1950s, it's established by the Government of India and is autonomous. people are eager to watch it in a box and it's commonly identified with swirls in it's logo",
		generation: 1950,
        correctOption: "doordarshan"
    },
	{
        question: "This toy company was founded by a carpenter in early 1930s. In 1950s, after purchasing a plastic molding machine, they created different smaller units with which any toy could be built using interlocking principle. Till today these are famous with kids. There is an animated movie released recently for it.",
		generation: 1950,
        correctOption: "lego"
    },
	{
        question: "This was the author's first novel which earned a pulitzer prize in 1960s. The story explores racism and justice and is about a black man being falsely accused. What was the novel title?",
		generation: 1960,
        correctOption: "to kill a mocking bird"
    },
	{
        question: "Born in 1960s, this football player was famous for a goal scored against England during world cup. This earned him a special title associated with the god and he is ?",
		generation: 1960,
        correctOption: "diego maradona"
    },
	{
        question: "This popular travel destination has colonized India in 1670s around bengal and pondicherry. In 1960s, it tested it's first atomic bomb and joined the league of nuclear power with US, USSR",
		generation: 1960,
        correctOption: "france"
    },
	{
        question: "He graduated from Harvard University after which he joined the U.S. Naval Reserve and his rescue of his fellow sailors made him a war hero. He was the youngest person to assume the presidency (of United States) by election and the youngest president at the end of his tenure. He was assasinated in 1960s. Who is he?",
		generation: 1960,
        correctOption: "john f kennedy"
    },
	{
        question: "Around 1960s. India was soon met with crisis of attacks on north-eastern india(NEFA). This was to attack and capture north-eastern India. The talk of the day was to get the country better prepared militarily, which included mandatory NCC training. North-eastern India was attacked by _",
		generation: 1960,
        correctOption: "china"
    },
	{
        question: "This was launched onto space in 1990s and is a project of international cooperation between NASA and ESA. There is NASA site for its findings and images. It is named after an astronomer.",
		generation: 1990,
        correctOption: "hubble"
    },
	{
        question: "He made his tv debut in 1990s and became famous for sitcom which was co-written and created by him. This later inspired an animated spin-off. His character is ‘a child in a grown man’s body’ which he had developed while studying at Oxford. The sitcom or animated series is ? ",
		generation: 1990,
        correctOption: "mr bean"
    },
	{
        question: "A series of Bomb explosions that took place during 1990s, on what is now called ‘Black Friday,’ paralyzed India and shocked the world. These were the most destructive bomb explosions of the time in Indian history. which city did it occur ?",
		generation: 1990,
        correctOption: "bombay"
    },

    {
        question: "Around mid 1990s, she was the first of her animal group to be successfully cloned, until she passed away six-and-a-half years later. The technology that brought it to life has transformed our understanding of the potential of cloning, inspired a Nobel Prize and sparked ethical debates. what was she named ?",
		generation: 1990,
        correctOption: "dolly"
    },

    {
        question: "The world gained entry to the Wizarding World in late 1990s with her first volume book release, till then she was living in her car while writing this epic tale, defines what it’s like to chase your dreams no matter where you come from. What character was the series based on",
		generation: 1990,
        correctOption: "harry potter"
    },

    {
        question: "This disaster that happened in 1980s was influential that it transcends Earth day history. What started as a routine safety test ended in reactor explosion affecting thousands of lives. It happened at _",
		generation: 1980,
        correctOption: "chernobyl"
    },

    {
        question: "This has a ring but no finger and it could be held in hand and it was first introduced by _ ",
		generation: 1980,
        correctOption: "motorola"
    },

    {
        question: "This person may have been plying his craft since childhood but once 80s came around he challenged racial barriers in pop culture and became ruler of it.",
		generation: 1980,
        correctOption: "michael jackson"
    },

    {
        question: "The world is too small for it. It crumbled in end of 1980s which was first step towards reunification. What specifically crumbled ?",
		generation: 1980,
        correctOption: "berlin wall"
    },

    {
        question: "It is was first created in early 1980s, starting a revolutionary digital era that we know today. This was worked on by Scientists at CERN, a physics research facility in Switzerland, for a network to speed the circulation of reports.",
		generation: 1980,
        correctOption: "world wide web"
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
    while (shuffledQuestions.length <= 14) {
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
        if (indexNumber <= 14) {
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
