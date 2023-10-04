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

function move() {
  let img = document.querySelector(".astro");
  img.style.marginLeft += "700px";
}

function reduce() {
  let img = document.querySelector(".astro");
  img.style.transform = "scale(0.6)";
}

function enhance() {
  let img = document.querySelector(".astro");
  img.style.transform = "scale(1.2)";
}

function resetPosition() {
  let img = document.querySelector(".astro");
  img.style.marginLeft = "30px";
  img.style.marginTop= "120px";
}

function MoveUp() {
  let img = document.querySelector(".astro");
  img.style.marginTop = "10px";
}

function cambiarFondo() {
  let space = document.querySelector(".main-container");
  space.style.backgroundColor = "#420a8d";
}
/* cambiarFondo(); */
let botonColor = document.querySelector(".button-color");

botonColor.addEventListener("click", function () {
  cambiarFondo();
});

function posicionInicialAgrandar (){
    let image = document.querySelector(".astronauta");
    resetPosition() 
    enhance()
}
posicionInicialAgrandar ()