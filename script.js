/* TO DO:
* on click create a random flower
* maybe add the option to save as a pdf in order to print and colour by hand :D

Working on:

DONE:
* remove sliders
* d should take only one of the values from  [1,2,3,4,5,6,7,8,9]
* n should take only one of the values from [1,2,3,4,5,6,,7]
* stroke color should be random 
* background should be black
* Canvas size should be equal to the screen size
* If windows is resized canvas should be resized

*/

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let d, n, k, red, green, blue, cnvWeight, cnvHeight, flowerSize;

function setup() {
  cnvWidth = windowWidth*0.9;
  cnvHeight = windowHeight*0.8;
  flowerSize = Math.min(cnvWidth, cnvHeight)/2.5;
  var cnv = createCanvas(cnvWidth, cnvHeight);
  cnv.style('display', 'block');
  
  d = randomIntFromInterval(1, 9);
  n = randomIntFromInterval(1, 7);
  k = n / d; 
  red = randomIntFromInterval(1, 255);
  green = randomIntFromInterval(1, 255);
  blue = randomIntFromInterval(1, 255);
  
}

function windowResized() {
  cnvWidth = windowWidth*0.9;
  cnvHeight = windowHeight*0.8;
  flowerSize = Math.min(cnvWidth, cnvHeight)/2.5;
  resizeCanvas(cnvWidth, cnvHeight);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  beginShape();
  noFill();
  stroke(red, green, blue);
  strokeWeight(4);

  for (let a = 0; a < TWO_PI * d; a += 0.02) {
    let r = flowerSize * cos(k * a);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape();
}
