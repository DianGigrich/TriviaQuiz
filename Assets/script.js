//hide quiz til start
//press button to start
//button hides, first qeustion reveals, timer starts
//click answer, answer is stored in localStorage, 
//next question revealed
//show score at end
//entry for initials
//show high score log


var startGame = document.getElementById("startButton")
var theHead = document.querySelector(".theHead")
var theEnd = document.querySelector(".theEnd")

var showQ = document.querySelector(".showQ")
var isPlaying = false;

var timerInt;
var secondsLeft;
var timerSpan = document.getElementById("seeTimer");

var submitInitials = document.getElementById("submitInitials");

var score = 0
var currentIndex = 0
var Questions = [{
    id: 0,
    Q: "What is the name of the Traveler?",
    Pool: ["Golden Nara", "Paimon", "Aether", "Lumine"],
    Ans: "Aether"
},
{
    id: 1,
    Q: "What area has the best soundrack?",
    Pool: ["Dragonspine", "Watatsumi", "The Chasm", "Devantaka"],
    Ans: "Dragonspine"
},
]



// localStorage.setItem("score", JSON.stringify())

// storedAnswer = JSON.parse(localStorage.getItem())


startGame.addEventListener("click", function () {
    if (isPlaying) {
        return;
    }
    displayQuestion()

    console.log("game started")

    // hide display button
    startButton.style.display = "none"
    showQ.style.display = "block"
    theHead.style.display = "none"


    isPlaying = true
    secondsLeft = 10
    console.log(secondsLeft)


    function displayQuestion() {
        console.log("displayQuestion()")
        var newQ = Questions[currentIndex]

        var qPara = document.createElement("p")

        // end of questionaire
        if (newQ === undefined) {
            endGame()
        }

        qPara.innerText = newQ.Q
        console.log("qPara", newQ.Q)

        document.querySelector(".showQ").appendChild(qPara)

        for (i = 0; i < newQ.Pool.length; i++) {
            var ansButton = document.createElement("button")
            ansButton.innerText = newQ.Pool[i]
            document.querySelector(".showQ").appendChild(ansButton)

            // person clicks answer
            ansButton.addEventListener("click", function () {
                if (ansButton.innerText == newQ.Ans) {
                    score = score + 100
                    secondsLeft += 5
                    console.log(score)
                }

                else {
                    secondsLeft -= 10
                }

                currentIndex += 1

                // clear board
                document.querySelector(".showQ").innerHTML = ""
                qPara = ""

                displayQuestion()

            })

        }
    }
    // time ends
    clearInterval(secondsLeft)
    var timerInt = setInterval(function () {
        secondsLeft--;
        timerSpan.textContent = secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(timerInt);
            isPlaying = false;
            timerSpan.textContent = '0';
            endGame()

            console.log("endtimer")
        };
    }, 1000);

    // ENDGAME PROCESSES
    function endGame(){

        // show end screen, hide questions
        theEnd.style.display = "flex"
        showQ.style.display = "none"
// click SUBMIT
        submitInitials.addEventListener("click", function (event) {
            event.preventDefault();

            var initials = document.querySelector("#enteredInitials").value;

            localStorage.setItem("initials", JSON.stringify(initials))
            localStorage.setItem("score", score)

            window.location.href= "/highscores/HighScores.html"

            console.log(submitInitials)
        })
        console.log("end quiz")
        return
    }
})

