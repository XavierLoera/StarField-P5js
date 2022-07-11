var h = window.innerHeight; //gets window hight
var w = window.innerWidth; //gets window width

const stars = new Array() //create an empty array
let speed 


setup = () => {
  createCanvas(w, h); //create a full size canvas
  for(let i = 0; i < 1000; i++) {
    stars[i] = new Star(); //create an array of 1000 Stars objects
  }
}

draw = () => {
  if (speed < 1) { // sets default speed when loading screen
    mouseX = 12
  }
 
  speed = map(mouseX,0,w,mouseX/10,0) // speed of stars based on Mouse x-axis from the center(closer to center the faster)
  background('black'); //change background color to black
  translate(w/2, h/2) // translate to center
  for(let i = 0; i < stars.length; i++) {
    stars[i].update()
    stars[i].show()
  }
}
