// create simple animation of the toggle button changing

const toggleItem = document.getElementById("toggle");

function changeButton() {
  console.log(toggleItem.innerHTML);
  if (toggleItem.innerHTML === "toggle_off") {
    toggleItem.innerHTML = "toggle_on";
  } else if (toggleItem.innerHTML === "toggle_on") {
    toggleItem.innerHTML = "toggle_off";
  }
  console.log(toggleItem.innerHTML);
}

toggleItem.addEventListener("click", changeButton);

// change the style sheet on press of the toggle above

function swapStyleSheet() {
  const linkPageStyle = document.getElementById("pagestyle");
  let currentStyle = linkPageStyle.getAttribute("href");
  console.log(currentStyle);
  if (currentStyle === "darkStyle.css") {
    linkPageStyle.setAttribute("href", "style.css");
    currentStyle = "style.css";
  } else if (currentStyle === "style.css") {
    linkPageStyle.setAttribute("href", "darkStyle.css");
    currentStyle = "darkStyle.css";
  }
  console.log(currentStyle);
}

// let toggleButton = document.getElementById("button");

toggleItem.addEventListener("click", swapStyleSheet);
