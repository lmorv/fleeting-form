// This code is modified from the code provided by Daniel Shiffman
// http://codingtra.in

var inc = 0.1;
var scl = 10;
var cols, rows;

var zoff = 0;

var fr;

var particles = [];
// var jitterDots = [];

var flowfield;

var video;
var vScale = 16;

var timer = 0;

var colFlow = (0,0,0); // video.get(px, py);
// var colJitter = (0,0,0);

function setup() {
  createCanvas(640*2, 480*2);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');

  flowfield = new Array(cols * rows);

  for (var i = 0; i < 500; i++) {
    particles[i] = new Particle();
    // jitterDots[i] = new JitterDot();
  }

  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
  
  background(0);
}

function draw() {

  // for (var i = 0; i < jitterDots.length; i++) {
  //   jitterDots[i].update();
  //   jitterDots[i].show();
  // }

  flowFieldBehavior();
}

function flowFieldBehavior() {
  var yoff = 0;

  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
      stroke(0, 80);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      // pop();
    }
    yoff += inc;

    zoff += 0.0003;
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }

  fr.html(floor(frameRate()));
}