// Variaveis do jogo
let tela_altura = 400;
let tela_largura = 600;
let velocidae_inicial = 3;
let som_1 = 'sons/trilha_jogo.mp3';
let trilha_sonora;

// Variaveis de cenario
let imagem_floresta = 'imagens/cenario/floresta.png';
let imagem_cenario;
let cenario;

// Variaveis do heroi
let imagem_sakura = 'imagens/personagem/sakura.png'
let imagem_personagem;
let personagem;

// Variaveis dos inimigos
let imagem_slime = 'imagens/inimigos/slime.png'
let imagem_inimigo1;
let inimigo1;

// Carrega memoria
function preload()
{
  imagem_cenario = loadImage(imagem_floresta);
  imagem_personagem = loadImage(imagem_sakura);
  imagem_inimigo1 = loadImage(imagem_slime);
  trilha_sonora = loadSound(som_1);
}

// Inicializacao
function setup() 
{
  createCanvas(tela_largura, tela_altura);
  cenario = new Cenario(imagem_cenario,velocidae_inicial);
  personagem = new Personagem(imagem_personagem, 4, 4);
  inimigo1 = new Personagem(imagem_inimigo1, 7, 4);
  frameRate(45);
  trilha_sonora.loop();  
}

// Desenho do frame
function draw() 
{
  cenario.desenha();
  personagem.desenha();
  inimigo1.desenha();
  
  // Acelera com o tempo
  // cenario.acelera(0.01);
  
  if (keyIsPressed === true) {
  if (keyCode === LEFT_ARROW) personagem.esquerda();
  if (keyCode === RIGHT_ARROW) personagem.direita();
  }

}
