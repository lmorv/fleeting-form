// This code is modified from the code provided by Daniel Shiffman
// http://codingtra.in


function Particle() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxspeed = 15;
    this.h = 0;
    this.lineWeight;
    this.angle = 0; // oscillation value used to change Line weight according to a sin wave.
  
    this.prevPos = this.pos.copy();
  
    this.update = function() {
      
      this.vel.add(this.acc);
      this.vel.limit(this.maxspeed);
      this.pos.add(this.vel);
      this.acc.mult(0);
    };
  
    this.follow = function(vectors) {
      
      var x = floor(this.pos.x / scl);
      var y = floor(this.pos.y / scl);
      var index = x + y * cols;
      var force = vectors[index];
      this.applyForce(force);
    };
  
    this.applyForce = function(force) {
      this.acc.add(force);
    };
  
    this.show = function() {

      this.lineWeight = map(sin(this.angle),-1 ,1 , 1, 10); // Set value of lineWeight property.
      strokeWeight(this.lineWeight); // Use lineWeight property to the set the stroke size of lines 
      this.angle += 0.04;

      if (millis() - timer > 10000){
        timer = millis();
        opacity = opacity - 8;
        this.lineWeight = this.lineWeight - 1;
        if (opacity<0) {
          opacity = 255;
          this.lineWeight = this.lineWeight + 2;
        }
      }

      var px = floor(this.pos.x / vScale);
      var py = floor(this.pos.y / vScale);
      var col = video.get(px, py);  
      var strokeR = col[0] - this.h;
      var strokeG = col[1] - this.h;
      var strokeB = col[2] - this.h;

      if ((strokeR>150)&(strokeG>150)&(strokeB>150)){
        stroke(strokeR, strokeG, strokeB, opacity);
      }
      else{
        stroke(strokeR, strokeG, strokeB, opacity);
      }
      
     
      line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y); // Draw lines!
      
      this.updatePrev();
    };
  
    this.updatePrev = function() {
      
      this.prevPos.x = this.pos.x;
      this.prevPos.y = this.pos.y;
    };
  
    
    this.edges = function() {
      if (this.pos.x > width) {
        this.pos.x = 0;
        this.updatePrev();
      }
      if (this.pos.x < 0) {
        this.pos.x = width;
        this.updatePrev();
      }
      if (this.pos.y > height) {
        this.pos.y = 0;
        this.updatePrev();
      }
      if (this.pos.y < 0) {
        this.pos.y = height;
        this.updatePrev();
      }
    };
  }