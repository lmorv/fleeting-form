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
    createCanvas(windowWidth, windowHeight);
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