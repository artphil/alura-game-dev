// Variaveis do jogo
let velocidae_inicial = 3;
let som_1 = 'sons/trilha_jogo.mp3';
let trilha_sonora;

// Variaveis de cenario
let imagens_floresta = ['imagens/cenario/floresta_1.png',
  'imagens/cenario/floresta_2.png',
  'imagens/cenario/floresta_3.png',
  'imagens/cenario/floresta_4.png',
  'imagens/cenario/floresta_5.png'
];
let imagens_cenario = [];
let cenario;

// Variaveis do heroi
let imagem_sakura = 'imagens/personagem/sakura.png'
let som_pulo = 'sons/sfx-jump-20.wav';
let imagem_personagem;
let personagem;

// Variaveis dos inimigos
let imagem_slime = 'imagens/inimigos/slime.png'
let imagem_inimigo1;
let inimigo1;
let inimigos = [];

// Carrega memoria
function preload() {
  for (let i = 0; i < imagens_floresta.length; i++) {
    imagens_cenario.push(loadImage(imagens_floresta[i]));
  }
  imagem_personagem = loadImage(imagem_sakura);
  imagem_inimigo1 = loadImage(imagem_slime);
  trilha_sonora = loadSound(som_1);
  efeito_pulo = loadSound(som_pulo);
}

// Inicializacao
function setup() {
  // createCanvas(600, 400);
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagens_cenario, velocidae_inicial);
  personagem = new Personagem(imagem_personagem, 4, 4, 0, height * .75, .25);
  inimigo1 = new Inimigo(imagem_inimigo1, 7, 4, 500, height * .9, .1, velocidae_inicial);
  inimigo2 = new Inimigo(imagem_inimigo1, 7, 4, width + 100, height * .9, .1, velocidae_inicial);
  inimigos.push(inimigo1)
  inimigos.push(inimigo2)
  frameRate(45);
  trilha_sonora.loop();  
}

// Listernin
function keyPressed() {
  if (keyCode === CONTROL)
  {
    personagem.pula();
    efeito_pulo.play();
  }
}

// Desenho do frame
function draw() {
  cenario.desenha();
  personagem.desenha();
  for (let i = 0; i < inimigos.length; i++) {
    inimigos[i].desenha();
    inimigos[i].acelera(0.005);
  }

  // Acelera com o tempo
  cenario.acelera(0.01);

  if (keyIsPressed === true) {
    if (keyCode === LEFT_ARROW) personagem.esquerda();
    if (keyCode === RIGHT_ARROW) personagem.direita();
  }
  
  // testa colisao
  if (personagem.colide(inimigos)) console.log("colidiu");//noLoop();

}