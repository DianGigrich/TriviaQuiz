//hide quiz til start
//press button to start
//button hides, quiz reveals, timer starts
//click answer, next answer reveals, answer is cataloged in localserver
//

MAKE JAVASCRIPT OBJECT FOR QUESTIONS


var startGame = document.getElementById("startButton")
var isPlaying = false;

var timerInt;
var secondsLeft = 5;
var timerSpan = document.getElementById("seeTimer");

var trueAnswers = {}

localStorage.setItem("score", JSON.stringify(trueAnswers))

// storedAnswer = JSON.parseINT(localStorage.getItem(score))


startGame.addEventListener("click", function () {
    if (isPlaying) {
        return;
    }
    console.log("game started")
    // hide display button
    startButton.style.display = "none"

    isPlaying = true
    secondsLeft = 5
    console.log(secondsLeft)

    Q1.style.display = "block";
    Q1.addEventListener("click", function (Event) {

        var clicky = Event.target
        if (clicky === ) {
            trueAnswers.textContent = "10"
            console.log("numberlogged")
        }

    })

    clearInterval(secondsLeft)
    var timerInt = setInterval(function () {
        secondsLeft--;
        timerSpan.textContent = secondsLeft;
        // time ends
        if (secondsLeft === 0) {
            clearInterval(timerInt);
            isPlaying = false;
            timerSpan.textContent = '0';
            console.log("endtimer")
        }

    }, 1000);

})

// over.textContent = "Would you like to see High Scores?"
// over.setAttribute("style", "font-size:40px; font-weight: bold")
