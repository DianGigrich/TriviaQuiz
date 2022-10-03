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
var userScore = document.getElementById("userScore")

var showQ = document.querySelector(".showQ")
var isPlaying = false;

var timerInt;
var secondsLeft;
var timerSpan = document.getElementById("seeTimer");

var submitInitials = document.getElementById("submitInitials");

var score = 0
var currentIndex = 0
var Questions = [{
    // id: 0,
    Q: "What is the name of the Traveler?",
    Pool: ["Golden Nara", "Paimon", "Aether", "Lumine"],
    Ans: "Aether"
},
{
    Q: "What area has the best soundtrack?",
    Pool: ["Dragonspine", "Watatsumi", "The Chasm", "Devantaka"],
    Ans: "Dragonspine"
},
{
    Q: "Who is the best character?",
    Pool: ["Xiao", "Traveler", "Ganyu", "Xiangling", "Zhongli", "Ei", "Klee", "Collei", "Guoba", "Kazuha"],
    Ans: "Kazuha"
},
{
    Q: "Should you use potions going into a fight?",
    Pool: ["Attack Potions", "Defense Potions", "Element Potions", "No"],
    Ans: "No"
},
{
    Q: "Which kind of slime is the best?",
    Pool: ["hydro", "anemo", "geo", "cryo", "dendro", "pyro", "electro"],
    Ans: "dendro"
},
{
    Q: "Who uses Starconchs to level up?",
    Pool: ["Raiden Shogun", "Xinqiu", "Childe", "Kokomi"],
    Ans: "Childe"
},
{
    Q: "What is the only five star food in Genshin?",
    Pool: ["Jade Parcels", "Mushroom Pizza", "Flaming Red Bolognese", "Adeptus Temptation"],
    Ans: "Adeptus Temptation"
},
{
    Q: "Who is the Tsaritsa?",
    Pool: ["A fly", "The bad guy", "Chef at the Wanmin restaurant", "Cryo Archon"],
    Ans: "Cryo Archon"
},
{
    Q: "What is the festival called that celebrates Xiao?",
    Pool: ["Weinlesefest", "LanternRite", "Ludi Harpastum", "MoonChase"],
    Ans: "LanternRite"
},
{
    Q: "Who is not the God of Geo?",
    Pool: ["Morax", "RexLapis", "Zhongli", "Azhdaha"],
    Ans: "Azhdaha"
}
]



// localStorage.setItem("score", JSON.stringify())

// storedAnswer = JSON.parse(localStorage.getItem())


startGame.addEventListener("click", function () {
    if (isPlaying) {
        return;
    }
    displayQuestion()
    countdown()

    console.log("game started")

    // hide display button
    startButton.style.display = "none"
    showQ.style.display = "block"
    theHead.style.display = "none"


    isPlaying = true
    secondsLeft = 120
    console.log(secondsLeft)


    function displayQuestion() {
        console.log("displayQuestion()")
        var newQ = Questions[currentIndex]

        var qPara = document.createElement("p")

        // end of questionaire
        if (newQ === undefined) {
            endGame()
            return
        }

        qPara.innerHTML = newQ.Q
        console.log("qPara", newQ.Q)

        document.querySelector(".showQ").appendChild(qPara)

        for (i = 0; i < newQ.Pool.length; i++) {
            var ansButton = document.createElement("button")
            ansButton.textContent = newQ.Pool[i]
            document.querySelector(".showQ").appendChild(ansButton)

            // person clicks answer
            ansButton.addEventListener("click", function (event) {
                var chosen = event.target

                

                if (chosen.textContent === newQ.Ans) {
                    score = score + 56
                    console.log(score)
                    console.log(newQ.Ans)
                
                }

                else {
                    secondsLeft -= 10
                }

                var ansChosen= document.createElement("h2")
                ansChosen.innerHTML = newQ.Ans
                document.querySelector(".showQ").appendChild(ansChosen)
                console.log(ansChosen)
                
                currentIndex += 1

                // clear board
                document.querySelector(".showQ").innerHTML = ""
                qPara = ""

                displayQuestion()

            })

        }
    }
    // time ends
    function countdown() {
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
            }
        }, 1000);
    }

    // ENDGAME PROCESSES
    function endGame() {

        // show end screen, hide questions
        theEnd.style.display = "flex"
        showQ.style.display = "none"
        userScore.textContent = score + " "
        // click SUBMIT
        submitInitials.addEventListener("click", function (event) {
            event.preventDefault();


            var initials = document.querySelector("#enteredInitials").value;
            var scoreArray = JSON.parse(localStorage.getItem("scoreArray"))

            if (scoreArray === null) {
                scoreArray = []
            }

            var initialScore = {
                initials: initials,
                score: score
            }
            console.log(initialScore)
            console.log(scoreArray)
            scoreArray.push(initialScore)

            localStorage.setItem("scoreArray", JSON.stringify(scoreArray))

            window.location.href = "/highscores/HighScores.html"

            console.log(submitInitials)
        })
        console.log("end quiz")

    }

})
// read data at storage
// update at storage
// render to page

