function move() {
  let image = document.querySelector(".astronauta");
  image.style.marginLeft += "700px";
}
move();

function achicar() {
  let image = document.querySelector(".astronauta");
  image.style.transform = "scale(0.6)";
}
achicar();

function agrandar() {
  let image = document.querySelector(".astronauta");
  image.style.transform = "scale(1.2)";
}
agrandar();

function volverAlInicio() {
  let image = document.querySelector(".astronauta");
  image.style.marginLeft = "30px";
  image.style.transform = "scale(1)";
}
volverAlInicio();
