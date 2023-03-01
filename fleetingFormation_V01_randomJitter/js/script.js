var video;
var vScale = 16;

var particles = [];


var timer = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
  for (var i = 0; i < 200; i++) {
    particles[i] = new Particle (random(width), random(height));
  }
  
video.hide();
  background(0);
  
//   background(51);
}

function draw() {
  video.loadPixels();
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();

    
  }
}