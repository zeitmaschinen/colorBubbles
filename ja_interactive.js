function setup() {
  createCanvas(windowWidth, windowHeight); //Tamanho do canvas = tamanho da janela

  //Tamanho do primeiro quadrado (80%) do que for menor, largura ou algura
  firstSize = Math.min(windowWidth, windowHeight)*0.8;

  //centralizar o primeiro quadrado (diferenca entre o tamanho do canvas e o tamanho do primeiro quadrado / 2)
  firstX = (windowWidth-firstSize)/2;

  // distancia pra baixo eh 6% to tamanho do primeiro quadrado
  firstY = (windowHeight-firstSize)-firstSize*0.06;


  //Tamanho do segundo quadrado (50%) do que for menor, altura ou largura
  secondSize = Math.min(windowWidth, windowHeight)*0.5;

  //centralizar o segundo quadrado (diferenca entre o tamanho do canvas e do segundo quadrado / 2)
  secondX = (windowWidth-secondSize)/2;

  // distancia pra baixo eh 20% to tamanho do segundo quadrado
  secondY = (windowHeight-secondSize)-secondSize*0.2;

}

function draw() {
  noStroke();
  // Constrain mouseY to the range [0, height]
  let constrainedMouseY = constrain(mouseY, 0, height);

  background(map(constrainedMouseY, 0, height, 0, 255), 131, 191);

  // Adjusting fill color based on constrained mouseY

  fill(196, map(constrainedMouseY, 0, height, 0, 255) - 51, 0);
  square(firstX,firstY, firstSize);

  fill(243, map(constrainedMouseY, 0, height, 0, 255) - 58, 0);
  square(secondX,secondY, secondSize);
}

/* Static, without MouseY interaction
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
