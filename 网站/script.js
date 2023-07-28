
var pics = document.getElementById("pics");
var n = 1;

setInterval(function() {
    if (n > 2) n = 1;
    pics.innerHTML = "<img src='a%20(" + n + ").png'/>";
    n++;
  }, 3000);

