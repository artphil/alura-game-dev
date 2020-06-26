// Inicializacao
function setup() {
  // Tela
  // createCanvas(600, 400);
  createCanvas(windowWidth, windowHeight);
  frameRate(30);

  // Cenas 
  jogo = new Jogo();
  inicio = new Inicio();

  cenas = {
    jogo,
    inicio
  };

  jogo.setup();
  inicio.setup();

}

// Listernin
function keyPressed() {
  cenas[cena_atual].keyPress();
}
function mousePressed() {
  cenas[cena_atual].mousePress();
}


// Desenho do frame
function draw() {
  cenas[cena_atual].draw();

}