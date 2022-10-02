//hide quiz til start
//press button to start
//button hides, first qeustion reveals, timer starts
//click answer, answer is stored in localStorage, 
//next question revealed
//show score at end
//entry for initials
//show high score log


var startGame = document.getElementById("startButton")
var isPlaying = false;

var timerInt;
var secondsLeft = 5;
var timerSpan = document.getElementById("seeTimer");

var currentQ = 0
var Questions = [{
    id: 0,
    Q: "What is the name of the Traveler?",
    Pool: ["Golden Nara", "Paimon", "Aether", "Lumine"],
    Ans: "Aether"
},
{id: 1,
Q: "What area has the best soundrack?",
Pool: ["Dragonspine", "Watatsumi", "The Chasm", "Devantaka"],
Ans: "Dragonspine"
},
]

var score = 0

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

    isPlaying = true
    secondsLeft = 5
    console.log(secondsLeft)

function displayQuestion() {
    document.querySelector(".showQ").innerHTML = ""

    var qPara= document.createElement("p")
    p.innterText = Questions[currentQ].Q
    document.querySelector(".showQ").appendChild(qPara)

    for (i=0; i < Questions[currentQ].Pool.length; i++) {
        var ansButton= document.createElement("button")
        ansButton.innerText = Questions[currentQ].Pool[i]
        document.querySelector(".showQ").appendChild(ansButton)

        ansButton.addEventListener("click", function () {
            if (ansButton.innerText == Questions[currentQ].Ans) {
                score+=10
                secondsLeft+=5
            }
            else {
                secondsLeft-=10
            }
        currentQ+=1
        displayQuestion()
        })
    }
}

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
