// renderScores();

// var highScores = []
// var initialsScore = document.getElementById("initialsScore")
// var rePlay = document.getElementById("rePlay")

// function renderScores() {
//     var retrieveInitials = JSON.parse(localStorage.getItem("initials"));
//     var retrieveScore = localStorage.getItem("score");

//     for (var i = 0; i < highScores.length; i++)
//         var scoreLi = document.createElement("li")
//     Li.textContent = " " + score[0]
//     score = highScores[i]
//     li.id = "li" + i;


//     initialsScore.append(scoreLi)

//     //   initialsScore.textContent = retrieveInitials
//     console.log(retrieveInitials)

// }

rePlay.addEventListener("click", function (event) {
    event.preventDefault();

    window.location.href = "/index.html"

    console.log()

})

// // var highScores = [];
// // var rankings = document.getElementById("rankings");

// // for (var i = 0; i < highScores.length; i++) {
//     var score = highScores[i];
//     var li = document.createElement("li");
//     // li.textContent = "  " + score[0];
//     // custom IDs to style top 3
//     // li.id = "li" + i;
//     // make newest score bold so user can immediately see how they compare
//     if (score == newScore) {
//         li.setAttribute("style", "font-weight: bold");
//     }
//     // insert score with a span tag to float right
//     var span = document.createElement("span");
//     span.setAttribute("class", "span");
//     span.textContent = score[1];
//     // unique class for every other li for styling
//     if (i % 2 == 0) {
//         li.setAttribute("class", "evenLI");
//     }
//     rankings.appendChild(li);
//     li.appendChild(span);