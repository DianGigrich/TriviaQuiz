renderLastRegistered();

// function displayMessage(type, message) {
//   msgDiv.textContent = message;
//   msgDiv.setAttribute("class", type);
// }

function renderLastRegistered() {
  var intials = localStorage.getItem("intitials");
  var password = localStorage.getItem("score");

  if (!email || !password) {
    return;
  }