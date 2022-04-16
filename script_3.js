document.getElementById("box3").onmouseover = function() {mouseOver()};
document.getElementById("box3").onmouseout = function() {mouseOut()};


function mouseOver() {
  document.getElementById("box3").style.color = "red";
}

function mouseOut() {
  document.getElementById("box3").style.color = "black";