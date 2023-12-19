let firstDistance = 90;
let secondDistance = 40;
let firstSquareY = 150;
let secondSquareY = 250;

function setup() {
  createCanvas(850, 850);
}

function draw() {
  background(55, 131, 191);

  // Adjusting fill color based on mouseY
  fill(map(mouseY, 0, height, 0, 255), 131, 191);

  square(0, 0, 850);
  noStroke();

  fill(196, map(mouseY, 0, height, 0, 255) - 51, 0);
  square(150, firstSquareY + (150 - firstDistance), 550);

  fill(243, map(mouseY, 0, height, 0, 255) - 58, 0);
  square(250, secondSquareY + (250 - firstDistance - secondDistance), 350);
}



/* Code without MouseY interaction
let firstDistance = 90;
let secondDistance = 40;
let firstSquareY = 150;
let secondSquareY = 250;

function setup() {
  createCanvas(850, 850);
  background(55, 132, 193);
}

function draw() {
  noStroke();
  fill(196, 51, 0);
  square(150, firstSquareY + (150 - firstDistance), 550);
  fill(243, 58, 0);
  square(250, secondSquareY + ([250 - firstDistance] - secondDistance), 350);
}
*/
