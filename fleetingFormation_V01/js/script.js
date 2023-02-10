/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

var video;

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
    createCanvas(1920, 1080);
    background(0);
    video = createCapture(VIDEO);
    video.size(1920,1080);
    video.hide();
}

/**
Description of draw()
*/
function draw() {
    image(video, 0, 0, width, height);
}