/**
Fleeting Formations
Leo & Nour

A program exploring the ephemeral nature of dreams. Takes a video feed from a camera and manipulates the image in abstract ways.
*/

"use strict";

var video;

let xOffset1 = 0; // offset on the horizontal axis of the Perlin Noise space.
let xOffset2 = 100;

/**
Description of preload
*/
function preload() {

}

/**
Description of setup
*/
function setup() {
    createCanvas(windowWidth - 100, windowHeight - 100);
    background(0);
    video = createCapture(VIDEO);
    video.size(windowWidth, windowHeight);
    video.hide();
}

/**
Description of draw()
*/
function draw() {
    image(video, 0, 0, width, height);
}