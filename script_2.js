
document.getElementById("box2").onmouseover = function() {mouseOver()};
document.getElementById("box2").onmouseout = function() {mouseOut()};


function mouseOver() {
  document.getElementById("box2").style.color = "red";
}

function mouseOut() {
  document.getElementById("box2").style.color = "black";
}