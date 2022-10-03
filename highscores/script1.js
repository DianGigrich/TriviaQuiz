

var initialsScore = document.querySelector("#ok")
var rePlay = document.getElementById("rePlay")
console.log(initialsScore, rePlay)

function renderScores() {
    var retrieveInitials = JSON.parse(localStorage.getItem("scoreArray"));

    for (var i = 0; i < retrieveInitials.length; i++) {
        var scoreLi = document.createElement("li")

        scoreLi.textContent = " " + retrieveInitials[i].initials + ": " + retrieveInitials[i].score

        console.log(initialsScore, rePlay)
        initialsScore.appendChild(scoreLi)
    }

    console.log(retrieveInitials)

}

rePlay.addEventListener("click", function (event) {
    event.preventDefault();

    window.location.href = "/index.html"

    console.log()
})
renderScores();