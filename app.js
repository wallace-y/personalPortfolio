// dark mode function
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  console.log("Button pressed");
}

document.getElementById("button").addEventListener("click", darkMode);
