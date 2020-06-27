// Assets
// Imagens
const enemy_img_path = [
	'assets/imgs/inimigos/slime.png',
	'assets/imgs/inimigos/flyer.png',
	'assets/imgs/inimigos/troll.png'
];

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
const trilha_jogo_path = 'assets/snds/trilha_jogo.mp3';
const som_pulo_path = 'assets/snds/sfx-jump-20.wav';
const som_lose_path = 'assets/snds/lose.wav';

// Fontes
let fonte_inicio_path = 'assets/fnts/fonteTelaInicial.otf';
let fonte_botao_path = 'assets/fnts/IMMORTAL.ttf';

// Cenas
let inicio;
let jogo;
let creditos;
let cenas;
let cena_atual;

// Fontes
let fonte_inicio;
let fonte_botao;

// Sons 
let trilha_sonora;
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
let aceleracao = 0.01;
let chao;
let pontos;

// Personagens
const character_img = [];
const character_sprite = [];
const characters = [];
let personagem;

// Inimigos
const enemy_img = [];
const enemy_sprite = [];
const enemies = [];
let ultimos_inimigos;
let inimigo_maximo;
