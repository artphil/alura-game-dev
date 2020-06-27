// Assets
// Imagens
const imagem_troll = 'imagens/inimigos/troll.png'
const imagem_flyer = 'imagens/inimigos/flyer.png'
const imagem_slime = 'imagens/inimigos/slime.png'

const imagem_sakura = 'imagens/personagem/sakura.png'

const fim_jogo_img_path = 'imagens/assets/game-over.png';
const vida_img_path = 'imagens/assets/coracao.png';

let inicio_img_path = 'imagens/cenario/telaInicial.png';
const imagens_floresta = [
  ['imagens/cenario/floresta_1.png',
  'imagens/cenario/floresta_2.png',
  'imagens/cenario/floresta_3.png',
  'imagens/cenario/floresta_4.png',
  'imagens/cenario/floresta_5.png'
],
    ['imagens/cenario/floresta2_1.png',
  'imagens/cenario/floresta2_2.png',
  'imagens/cenario/floresta2_3.png',
  'imagens/cenario/floresta2_4.png',
  'imagens/cenario/floresta2_5.png'
],
    ['imagens/cenario/floresta3_1.png',
  'imagens/cenario/floresta3_2.png',
  'imagens/cenario/floresta3_3.png',
  'imagens/cenario/floresta3_4.png',
  'imagens/cenario/floresta3_5.png'
],
    ['imagens/cenario/floresta4_1.png',
  'imagens/cenario/floresta4_2.png',
  'imagens/cenario/floresta4_3.png',
  'imagens/cenario/floresta4_4.png',
  'imagens/cenario/floresta4_5.png'
]
];

// Sons
const trilha_jogo_path = 'sons/trilha_jogo.mp3';
const som_pulo_path = 'sons/sfx-jump-20.wav';
const som_lose_path = 'sons/lose.wav';

// Fontes
let fonte_inicio_path = 'fontes/fonteTelaInicial.otf';
let fonte_botao_path = 'fontes/IMMORTAL.ttf';

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
let sprite_personagem;
let imagem_personagem;
let personagem;

// Inimigos
const imagem_inimigos = [];
const sprite_inimigos = [];
const inimigos = [];
let ultimos_inimigos;
let inimigo_maximo;
