// declara as variáveis
let canvasSize;
let canvasX;
let canvasY;
let firstSize;
let firstX;
let firstY;
let secondSize;
let secondX;
let secondY;

function setup() {
  createCanvas(windowWidth, windowHeight); //Tamanho do canvas = tamanho da janela

  //Tamanho do primeiro quadrado (90%) do que for menor, largura ou altura
  canvasSize = Math.min(windowWidth, windowHeight) * 0.9;

  //centralizar o primeiro quadrado (diferença entre o tamanho do canvas e o tamanho do primeiro quadrado / 2)
  canvasX = (windowWidth - canvasSize) / 2;

  canvasY = 0;

   //Tamanho do primeiro quadrado (60%) do que for menor, largura ou altura
  firstSize = canvasSize * 0.6;


  //centralizar o primeiro quadrado (diferença entre o tamanho do canvas e o tamanho do primeiro quadrado / 2)
  firstX = (windowWidth - firstSize) / 2;

  //distancia pra baixo entre canvas e primeiro quadrado
  firstY = (canvasSize - firstSize) - firstSize * 0.14;

  //Tamanho do segundo quadrado (40%) do que for menor, altura ou largura
  secondSize = canvasSize * 0.4;

  //centralizar o segundo quadrado (diferença entre o tamanho do canvas e do segundo quadrado / 2)
  secondX = (windowWidth - secondSize) / 2;

  //distancia pra baixo é 34% do tamanho do segundo quadrado
  secondY = (canvasSize - secondSize) - secondSize * 0.34;
}

function draw() {
  noStroke();
  // Constrain mouseY to the range [0, height]
  let constrainedMouseY = constrain(mouseY, 0, height);

  background(255);

  // Adjusting fill color based on constrained mouseY
  fill(map(constrainedMouseY, 0, height, 0, 255), 131, 191);
  square(canvasX, canvasY, canvasSize);

  fill(196, map(constrainedMouseY, 0, height, 0, 255) - 51, 0);
  square(firstX, firstY, firstSize);

  fill(243, map(constrainedMouseY, 0, height, 0, 255) - 58, 0);
  square(secondX, secondY, secondSize);
}
