renderScores();

var initialsScore = document.getElementById("initialsScore")
var rePlay = document.getElementById("rePlay")

function renderScores() {
  var retrieveInitials = JSON.parse(localStorage.getItem("initials"));
  var retrieveScore = localStorage.getItem("score");

  initialsScore.textContent = retrieveInitials
  console.log(retrieveInitials)

}

rePlay.addEventListener("click", function () {
    window.location.href= "/index.html"
})