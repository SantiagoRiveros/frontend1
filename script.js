function move() {
    let image = document.querySelector(".astronauta")
    image.style.marginLeft += "700px";
}
move()

function reduce() {
    let image = document.querySelector(".astronauta")
    image.style.transform = "scale(0.6)";
}
reduce()

function aumentar() {
    let image = document.querySelector(".astronauta")
    image.style.transform = "scale(1.2)";
}
aumentar()

function volverAlInicio() {
    let image = document.querySelector(".astronauta");
    image.style.marginLeft = "30px";
}
volverAlInicio()

function moveUp() {
    let image = document.querySelector(".astronauta")
    image.style.marginTop += "10px";
}
moveUp()

function cambiarFondo() {
    let space = document.querySelector(".main-container");
    space.style.backgroundColor = "red";
}
cambiarFondo()

astronauta.addEventListener("keydown", (event)=> {
    console.log(event.code);
    if(event.code === "Space") {
    move();
    reduce();
    }
});

