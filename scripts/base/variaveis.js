// Assets
// Imagens
const enemy_data = [
	{name: 'slime',         path:'assets/imgs/inimigos/slime.png',        lines:7, cols:4, quant:28, reduct:1},
	{name: 'slime_blue',    path:'assets/imgs/inimigos/slime_blue.png',   lines:7, cols:4, quant:28, reduct:1},
	{name: 'flyer',         path:'assets/imgs/inimigos/flyer.png',        lines:6, cols:3, quant:16, reduct:3},
	{name: 'slime_green',   path:'assets/imgs/inimigos/slime_green.png',  lines:7, cols:4, quant:28, reduct:1},
	{name: 'flyer_pink',    path:'assets/imgs/inimigos/flyer_pink.png',   lines:6, cols:3, quant:16, reduct:3},
	{name: 'slime_yellow',  path:'assets/imgs/inimigos/slime_yellow.png', lines:7, cols:4, quant:28, reduct:1},
	{name: 'flyer_silver',  path:'assets/imgs/inimigos/flyer_silver.png', lines:6, cols:3, quant:16, reduct:3},
	{name: 'slime_red',     path:'assets/imgs/inimigos/slime_red.png',    lines:7, cols:4, quant:28, reduct:1},
	{name: 'flyer_gold',    path:'assets/imgs/inimigos/flyer_gold.png',   lines:6, cols:3, quant:16, reduct:3},
	{name: 'slime_purple',  path:'assets/imgs/inimigos/slime_purple.png', lines:7, cols:4, quant:28, reduct:1},
	{name: 'flyer_black',   path:'assets/imgs/inimigos/flyer_black.png',  lines:6, cols:3, quant:16, reduct:3},
	{name: 'slime_devil',   path:'assets/imgs/inimigos/slime_devil.png',  lines:7, cols:4, quant:28, reduct:1},
]

const character_img_path = [
	'assets/imgs/personagem/sakura.png'
];

const fim_jogo_img_path = 'assets/imgs/assets/game-over.png';
const vida_img_path = 'assets/imgs/assets/coracao.png';

let inicio_img_path = 'assets/imgs/cenario/telaInicial.png';
const imagens_floresta = [
  ['assets/imgs/cenario/floresta_1.png',
  'assets/imgs/cenario/floresta_2.png',
  'assets/imgs/cenario/floresta_3.png',
  'assets/imgs/cenario/floresta_4.png',
  'assets/imgs/cenario/floresta_5.png'
],
    ['assets/imgs/cenario/floresta2_1.png',
  'assets/imgs/cenario/floresta2_2.png',
  'assets/imgs/cenario/floresta2_3.png',
  'assets/imgs/cenario/floresta2_4.png',
  'assets/imgs/cenario/floresta2_5.png'
],
    ['assets/imgs/cenario/floresta3_1.png',
  'assets/imgs/cenario/floresta3_2.png',
  'assets/imgs/cenario/floresta3_3.png',
  'assets/imgs/cenario/floresta3_4.png',
  'assets/imgs/cenario/floresta3_5.png'
],
    ['assets/imgs/cenario/floresta4_1.png',
  'assets/imgs/cenario/floresta4_2.png',
  'assets/imgs/cenario/floresta4_3.png',
  'assets/imgs/cenario/floresta4_4.png',
  'assets/imgs/cenario/floresta4_5.png'
]
];

// Sons
const soundtrack_game_path = 'assets/snds/trilha_jogo.mp3';
const som_pulo_path = 'assets/snds/sfx-jump-20.wav';
const som_lose_path = 'assets/snds/lose.wav';

// Fontes
let fonte_inicio_path = 'assets/fnts/fonteTelaInicial.otf';
let fonte_botao_path = 'assets/fnts/IMMORTAL.ttf';

// Cenas
let inicio;
let jogo;
let creditos;
let game_over;

let cenas;
let cena_atual;

// Fontes
let fonte_inicio;
let fonte_botao;

// Sons 
let soundtrack_game;
let efeito_pulo;
let efeito_lose;

// Cenario
let imagem_inicio;
const imagens_cenario = [];
let cenario;

let fim_jogo_img;

let sprite_vida;
let imagem_vida;
let item_vida;
let vida;

let velocidade_inicial;
let velocidade_atual;
let aceleracao = 0.005;
let chao;
let pontos;

// Personagens
const character_img = [];
const character_sprite = [];
const characters = [];
let personagem;

// Inimigos
const enemies = [];
let ultimos_inimigos;
let inimigo_maximo;
