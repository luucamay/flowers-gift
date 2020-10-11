/* Maths for flowers: https://en.wikipedia.org/wiki/Rose_(mathematics)
* TO DO:
* maybe add the option to save as a pdf in order to print and colour by hand :D

Working on:
* add a button to make a gift for someone 
DONE:
* remove sliders
* d should take only one of the values from  [1,2,3,4,5,6,7,8,9]
* n should take only one of the values from [1,2,3,4,5,6,,7]
* stroke color should be random 
* background should be black
* Canvas size should be equal to the screen size
* If windows is resized canvas should be resized
* on click create a random flower
* rotate flower
* add slider
* add text to slider for customize of flower
*/

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let angle = 0;
let d, n, k, red, green, blue, cnvWeight, cnvHeight, flowerSize, slider, helperText;

function setup() {
  customCanvasSetup();

  let cnv = createCanvas(cnvWidth, cnvHeight);
  let button = createButton("Presiona aquí para que recibas tu flor de regalo");
  button.mousePressed(resetSketch);
  helperText = createP('MODIFICA LA FLOR 👇').hide();
  slider = createSlider(1, 9, 1).hide();
  
}

function windowResized() {
  customCanvasSetup();
  resizeCanvas(cnvWidth, cnvHeight);
}

function customCanvasSetup() {
  cnvWidth = windowWidth * 0.9;
  cnvHeight = windowHeight * 0.7;
  flowerSize = Math.min(cnvWidth, cnvHeight) / 2.5;
}

function resetSketch() {
  d = 1;
  n = randomIntFromInterval(2, 7);
  red = randomIntFromInterval(1, 255);
  green = randomIntFromInterval(1, 255);
  blue = randomIntFromInterval(1, 255);
  
  helperText.show()
  slider.show()
}

function draw() {
  angle += 1;
  d = slider.value();
  k = n / d;
  background(26, 26, 29);
  translate(width / 2, height / 2);
  rotate(radians(angle));

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
