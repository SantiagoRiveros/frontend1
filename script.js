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

function move(){
    let img = document.querySelector(".astro")
    img.style.marginLeft+="700px"
}
move()

function reduce(){
    let img = document.querySelector(".astro")
    img.style.transform="scale(0.6)"
}
reduce()

function enhance(){
    let img = document.querySelector(".astro")
    img.style.transform="scale(1.2)"
}
enhance()

function resetPosition(){
    let img = document.querySelector(".astro")
    img.style.marginLeft="30px"
}
resetPosition()

function MoveUp(){
    let img = document.querySelector(".astro")
    img.style.marginTop="10px"
}
MoveUp()
