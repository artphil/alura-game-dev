// Assets
// Cenario - imagem
const imagens_floresta = ['imagens/cenario/floresta_1.png',
  'imagens/cenario/floresta_2.png',
  'imagens/cenario/floresta_3.png',
  'imagens/cenario/floresta_4.png',
  'imagens/cenario/floresta_5.png'
];
const fim_jogo_img_path = 'imagens/assets/game-over.png';
// Cenario - som
const trilha_jogo_path = 'sons/trilha_jogo.mp3';

// Objetos - imagem
const imagem_sakura = 'imagens/personagem/sakura.png'
const imagem_slime = 'imagens/inimigos/slime.png'
const imagem_flyer = 'imagens/inimigos/flyer.png'
const imagem_troll = 'imagens/inimigos/troll.png'
// Objetos - som
const som_pulo_path = 'sons/sfx-jump-20.wav';

// Variaveis do jogo
// Cenario
let fim_jogo_img;
const imagens_cenario = [];
let cenario;

let trilha_sonora;

let velocidae_inicial = 3;
let aceleracao = 0.001;
let chao;
let pontos;

// Variaveis do Personagem
let imagem_personagem;
let sprite_personagem;
let personagem;

let efeito_pulo;

// Variaveis dos inimigos
const imagem_inimigos = [];
const sprite_inimigos = [];
const inimigos = [];
let ultimos_inimigos = [0,1];


// Carrega memoria
function preload() {
  imagens_floresta.forEach(imagem => {
    imagens_cenario.push(loadImage(imagem));
  })
  imagem_personagem = loadImage(imagem_sakura);
  imagem_inimigos.push(loadImage(imagem_slime));
  imagem_inimigos.push(loadImage(imagem_flyer));
  imagem_inimigos.push(loadImage(imagem_troll));
  trilha_sonora = loadSound(trilha_jogo_path);
  efeito_pulo = loadSound(som_pulo_path);
  fim_jogo_img = loadImage(fim_jogo_img_path);

}

// Inicializacao
function setup() {
  // Tela
  // createCanvas(600, 400);
  createCanvas(windowWidth, windowHeight);
  frameRate(30);

  cenario = new Cenario(imagens_cenario, velocidae_inicial);
  pontos = new Pontuacao();

  trilha_sonora.loop();  

  // Variaveis
  chao = height * 0.07;

  // Sprites
  sprite_personagem = new Sprite(imagem_personagem, 4, 4, 16, 0.25);

  sprite_inimigos.push(new Sprite(imagem_inimigos[0], 7, 4, 28, 0.1));
  sprite_inimigos.push(new Sprite(imagem_inimigos[1], 6, 3, 16, 0.15));
  sprite_inimigos.push(new Sprite(imagem_inimigos[2], 6, 5, 28, 0.45));

  // Objetos
  personagem = new Personagem(sprite_personagem, 10, (height * 0.75) - chao);

  inimigos.push(new Inimigo(sprite_inimigos[0], width, (height * 0.9) - chao, velocidae_inicial));
  inimigos.push(new Inimigo(sprite_inimigos[0], width, (height * 0.9) - chao, velocidae_inicial+4));
  inimigos.push(new Inimigo(sprite_inimigos[0], -500, (height * 0.9) - chao, velocidae_inicial+2));
  inimigos.push(new Inimigo(sprite_inimigos[1], -500, (height * 0.6) - chao, velocidae_inicial+2));
  inimigos.push(new Inimigo(sprite_inimigos[1], -500, (height * 0.7) - chao, velocidae_inicial+3));
  inimigos.push(new Inimigo(sprite_inimigos[1], -500, (height * 0.6) - chao, velocidae_inicial));
  inimigos.push(new Inimigo(sprite_inimigos[1], -500, (height * 0.8) - chao, velocidae_inicial));
  inimigos.push(new Inimigo(sprite_inimigos[2], -500, (height * 0.6) - chao, velocidae_inicial));

}

// Listernin
function keyPressed() {
  if (keyCode === CONTROL) {
    personagem.pula();
    efeito_pulo.play();
  }
}

// Desenho do frame
function draw() {
  let inimigos_na_tela = 0;
  cenario.desenha_fundo();
  pontos.exibe();
  pontos.add();
  personagem.desenha();
  inimigos.forEach(inimigo => {
    inimigos_na_tela += inimigo.desenha();
    inimigo.acelera(aceleracao/2);
  });
  cenario.desenha_frente();


  // Acelera com o tempo
  cenario.acelera(aceleracao);

  if (keyIsDown(LEFT_ARROW)) personagem.esquerda();
  if (keyIsDown(RIGHT_ARROW)) personagem.direita();

  // testa colisao
  if (personagem.colide(inimigos)) {
    console.log("colidiu");
    noLoop();
    image(fim_jogo_img, (width - fim_jogo_img.width) / 2, 2 * (height - fim_jogo_img.height) / 5);
  }

  // Chama inimigo
  if (inimigos_na_tela < 2) {
    let i = aleatorio(inimigos.length, ultimos_inimigos);
    ultimos_inimigos.push(i);
    ultimos_inimigos.shift();
    
    console.log(i);
    
    inimigos[i].aparece();
  }
}