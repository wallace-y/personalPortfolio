function swapStyleSheet() {
  const linkPageStyle = document.getElementById("pagestyle");
  let currentStyle = linkPageStyle.getAttribute("href");
  if ((currentStyle = "darkStyle.css")) {
    linkPageStyle.setAttribute("href", "style.css");
    currentStyle = "style.css";
  } else if ((currentStyle = "style.css")) {
    linkPageStyle.setAttribute("href", "darkStyle.css");
    currentStyle = "darkStyle.css";
  }
  console.log(currentStyle);
}

let toggleButton = document.getElementById("button");

toggleButton.addEventListener("click", swapStyleSheet);
