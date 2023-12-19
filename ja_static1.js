// Declaring global variables
let positionSquare;
let movePixels;

// Initializing variables inside setup() and giving their values
// Making anchor of squares to their CENTER
function setup() {
  createCanvas(900, 900);
  positionSquare = 450;
  movePixels = 60;
}

function draw() {
  background(246, 173, 0);
  noStroke();
  rectMode(CENTER);
  fill(229, 112, 0);
  rect(450, positionSquare + movePixels, 700, 700);
  fill(213, 89, 0);
  rect(450, positionSquare + movePixels * 2, 500, 500);
  fill(200, 44, 0);
  rect(450, positionSquare + movePixels * 3, 300, 300);
}
