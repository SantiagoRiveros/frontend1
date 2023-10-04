/* var id = null;
function Animate() {
  var elem = document.querySelector(".astro");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 700) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + 'px'; 
    }
  }
}
Animate() */

/* SELECTORES */
let astronauta = document.querySelector(".astro");
let space = document.querySelector(".main-container");
let botonColor = document.querySelector(".button-color");

function move() {
  img.style.marginLeft += "700px";
}

function reduce() {
  img.style.transform = "scale(0.6)";
}

function enhance() {
  img.style.transform = "scale(1.2)";
}

function resetPosition() {
  img.style.marginLeft = "30px";
  img.style.marginTop = "120px";
}

function MoveUp() {
  img.style.marginTop = "10px";
}

function cambiarFondo() {
  space.style.backgroundColor = "#420a8d";
}

botonColor.addEventListener("click", function () {
  cambiarFondo();
});

function posicionInicialAgrandar() {
  resetPosition();
  enhance();
}
posicionInicialAgrandar();
