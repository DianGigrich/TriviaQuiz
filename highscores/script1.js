

var initialsScore = document.querySelector("#ok")
var rePlay = document.getElementById("rePlay")
var rvlAnswers = document.getElementById("rvlAnswers")
var Answers = document.querySelector(".Answers")

console.log(initialsScore, rePlay)

function renderScores() {
    var retrieveInitials = JSON.parse(localStorage.getItem("scoreArray"));
// retrieve scores from storage and line them up

    for (var i = 0; i < retrieveInitials.length; i++) {
        var scoreLi = document.createElement("li")
        
        scoreLi.textContent = " " + retrieveInitials[i].initials + ": " + retrieveInitials[i].score  

        console.log(initialsScore, rePlay)
        initialsScore.appendChild(scoreLi)
    }


}
// reveal answers button
rvlAnswers.addEventListener("click", function (event) {
    event.preventDefault();

    Answers.style.display = "flex"
})
// replay button
rePlay.addEventListener("click", function (event) {
    event.preventDefault();

    window.location.href = "/index.html"

    console.log()
})
renderScores();