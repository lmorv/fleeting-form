class Particle {
    constructor (x, y) {
        this.pos = createVector(x,y);
        this.vel = p5.Vector.random2D(); // create random unit vector.
        this.vel.mult(random(3)); // multiply the unit vector by a random scalar value from 0 to n.
        this.acc = p5.Vector.random2D();
        this.r = random(4, 32)
    }

    display() {

        var px = floor(this.x / vScale);
        var py = floor(this.y / vScale);
        var col = video.get(px, py);

        push()
        noStroke();
        fill(col[0], col[1], col[2], slider.value());
        ellipse(this.pos.x, this.pos.y, this.r, this.r);
        pop();
    }

    move() {
        this.vel.add(this.acc); 
        this.pos.add(this.vel);
    }
}