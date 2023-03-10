// This code is modified from the code provided by Daniel Shiffman
// http://codingtra.in


function Particle() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxspeed = 15;
    this.h = 0;
  
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
      if (millis() - timer > 1000){
        //tint(255,7);
        //currImage = image(video,0,0, width, height);
        //currImage = new Image(currImage);
        //if (typeof(currImage) != undefined){
          //imageArray[imageArrayIndex]=currImage;
          //imageArrayIndex = imageArrayIndex + 1;
          //if (imageArrayIndex > 60){
          //  imageArrayIndex = 0;
          //}
        //}
        //console.log(typeof(currImage));
        timer = millis();
        opacity = opacity - 8;
        if (opacity<0) {
          opacity = 255;

        }
      }
      var px = floor(this.pos.x / vScale);
      var py = floor(this.pos.y / vScale);
      var col = video.get(px, py);  
      console.log(opacity);
      var strokeR = col[0] - this.h;
      var strokeG = col[1] - this.h;
      var strokeB = col[2] - this.h;
      //var brightness = (strokeR + strokeG + strokeB)/3 + this.h;
      //floor(map(brightness,0,255,100,150));
      if ((strokeR>150)&(strokeG>150)&(strokeB>150)){
        stroke(strokeR, strokeG, strokeB, opacity);
      }
      else{
        stroke(strokeR, strokeG, strokeB, opacity);
      }
      
      strokeWeight(1);
      
      
      //setTimeout(line,7000);
      line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
      
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