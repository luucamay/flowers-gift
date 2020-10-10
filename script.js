/* TO DO:
* Canvas size should be equal to the screen size
* on click create a random flower
* stroke color should be random 
* background should be black
* maybe add the option to save as a pdf in order to print and colour by hand :D

Working on:
* remove sliders
* d should take only one of the values from  [1,2,3,4,5,6,7,8,9]
* n should take only one of the values from [1,2,3,4,5,6,,7]

*/

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let d, n, k;

function setup() {
  createCanvas(450, 450);
  d = randomIntFromInterval(1, 9);
  n = randomIntFromInterval(1, 7);
  k = n / d; 
}

function draw() {
  background(51);
  translate(width / 2, height / 2);
  beginShape();
  noFill();
  stroke(255);
  strokeWeight(4);

  for (let a = 0; a < TWO_PI * d; a += 0.02) {
    let r = 200 * cos(k * a);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape();
}
