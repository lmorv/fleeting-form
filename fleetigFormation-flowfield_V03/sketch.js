// This code is modified from the code provided by Daniel Shiffman
// http://codingtra.in



var inc = 0.01; // increment to update perlin offsets.
var scl = 10;  // Scale of the vector (flow) field. Ratio of vectors to pixels. Currently generates 1 vector for every 10 pixels. 
var cols, rows; // Columns and rows of the vector field.

var zoff = 0; // Offset in Perlin noise space, used in flow field 

var fr;

var particles = [];

var flowfield;

var video;
var vScale = 16;

var timer = 0;

var imageArray = [];
var imageArrayIndex = 0;

var opacity = 255;


// console.log('ml5 version:', ml5.version);

function setup() {
  createCanvas(windowWidth -200, windowHeight - 50); // Create canvas with desired dimensions.

  cols = floor(width / scl);   // Set the number of rows and columns in the vector filed equal 
  rows = floor(height / scl); // to the dimensions of the canvas divided by the scale value.

  // fr = createP('');

  flowfield = new Array(cols * rows);

  for (var i = 0; i < 500; i++) {
    particles[i] = new Particle();
  }
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
  video.hide();
  
  
  background(0);
  
}

function draw() {

 handle2DFlowField();
  
}

function handle2DFlowField() {

  inc = sin(inc); // Setting the perlin noise offset increment to the sin of itself every frame gives a cool effect.
  // console.log("Increment:" + inc);

  var yoff = 0; // y offset in Perlin noise space.
  
  for (var y = 0; y < rows; y++) { // Go through every row in the vector field
    var xoff = 0; // X offset in Perlin noise space.

    for (var x = 0; x < cols; x++) { // Go through every column in the vector field.
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4; // define noise coordinates according to offsets.
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc; // increase x offset by an increment.

      //stroke(0, 50);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      // pop();
    }
    yoff += inc; // increase y offset by an increment.
    zoff += 0.0003;
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }

  // fr.html(floor(frameRate()));

}

