let sliderD, sliderN;

function setup() {
  createCanvas(450, 450);
  sliderD = createSlider(1, 10, 5, 0.1);
  sliderN = createSlider(1, 10, 5, 0.1);
}

function draw() {
  let d = sliderD.value();
  let n = sliderN.value();
  let k = n / d;

  background(51);
  translate(width / 2, height / 2);
  beginShape();
  noFill();
  stroke(255);
  strokeWeight(4);

  for (let a = 0; a < TWO_PI * d; a += 0.02) {
    var r = 200 * cos(k * a);
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x, y);
  }
  endShape();
}
