// Cenas
let inicio;
let jogo;
let cenas;
let cena_atual = 'inicio';

let fonte_inicio_path = 'fontes/fonteTelaInicial.otf';
let fonte_botao_path = 'fontes/IMMORTAL.ttf';
let fonte_inicio;
let fonte_botao;

let inicio_img_path = 'imagens/cenario/telaInicial.png';
let imagem_inicio;

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

let velocidade_inicial;
let velocidade_atual;
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


