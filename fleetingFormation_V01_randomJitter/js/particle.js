// Daniel Shiffman
// code for https://youtu.be/vqE8DMfOajk

function Particle(x, y) {
    this.x = x;
    this.y = y;
        
    this.r = random(7, 52);
    
    //this.speed = 0.01;

    //this.xOffset1 = 0; // offset on the horizontal axis of the Perlin Noise space.
    //this.xOffset2 = 100;

  
    this.update = function() {
        
        console.log("updating");
        //this.xOffset1 += this.speed;
        //this.xOffset2 += this.speed;

        //this.x += this.xOffset1;
        //this.y += this.xOffset2;
     this.x += random(-10, 10);
     this.y += random(-10, 10);

      this.x = constrain(this.x, 0, width);
      this.y = constrain(this.y, 0, height);
    };
  
    this.show = function() {
      noStroke();
      var px = floor(this.x / vScale);
      var py = floor(this.y / vScale);
      var col = video.get(px, py);
      var brightness = floor((col[0] + col[1] + col[2])/3);
    
      if (brightness > 77){
        fill(col[0], col[1], col[2], 100);
        this.r = floor(map(brightness, 0, 255, 70, 50));
      }
      else{
        this.r = floor(map(brightness, 0, 255, 20, 40));
        fill(col[0], col[1], col[2], 150);
      }

    
      

      //console.log(col);
      //delayTime(7);
      if (millis() - timer > 2000){
        
        timer = millis();
      }

    //   fill(col[0], col[1], col[2], 100);
      ellipse(this.x, this.y, this.r, this.r);
      
      //triangle(this.x, this.y, this.x + 5, this.y + 5, this.x +5 , this.y + 5);
    };
  }