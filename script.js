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
let btMove = document.querySelector(".button-move")

function move() {
  let resultado = parseInt(astronauta.style.marginLeft) + 700;
  astronauta.style.marginLeft = resultado + "px";
}

function reduce() {
  astronauta.style.transform = "scale(0.6)";
}

function resize(){
  astronauta.style.transform = "scale(1)";
}

function enhance() {
  astronauta.style.transform = "scale(1.2)";
}

function resetPosition() {
  astronauta.style.marginLeft = "30px";
  astronauta.style.marginTop = "120px";
}

function MoveUp() {
  astronauta.style.marginTop = "10px";
}

function cambiarFondo() {
  space.style.backgroundColor = "#420a8d";
}

/* FUNCIONES COMPUESTAS */
function posicionInicialAgrandar() {
  resetPosition();
  enhance();
}
posicionInicialAgrandar();

/* EVENT LISTENERS */
botonColor.addEventListener("click", function () {
  cambiarFondo();
});

document.addEventListener("keydown", (event) => {
  console.log(event.code);
  if (event.code === "Space") {
    move();
    reduce();
  }
});

btMove.addEventListener("click",function(event){resetPosition();resize()});
