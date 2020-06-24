class Objeto {
  constructor(imagem, linhas, colunas, x, y, escala) {
    this.imagem = imagem;
    this.linhas = linhas;
    this.colunas = colunas;
    // Tamanho do slice     
    this.img_sx = imagem.width / colunas;
    this.img_sy = imagem.height / linhas;
    // Tamanho do personagem na tela    
    this.img_dy = height * escala;
    this.img_dx = this.img_dy * this.img_sx / this.img_sy;
    // Posicao do personagem na tela
    this.img_x = x;
    this.img_y = y;
    // Posicoes dos slices
    this.posicoes = gera_matriz(this.img_sy, this.img_sx, linhas, colunas);
    this.atual = 0;
    // Velocidades
    this.veloc_x = width / 100;
    this.veloc_y = 0;
    this.gravidade = 3;
    this.pulou = 0;
  }

  desenha() {
    image(this.imagem, this.img_x, this.img_y, this.img_dx, this.img_dy,
      this.posicoes[this.atual][0], this.posicoes[this.atual][1],
      this.img_sx, this.img_sy);
    this.anima();
  }

  anima() {
    if (this.pulou === 0)
      this.atual = (this.atual + 1) % this.posicoes.length;
    else this.atual = 0;
    this.acao_gravidade()
  }

  acao_gravidade() {
    if (this.img_y > (height - this.img_dy)) {
      this.img_y = (height - this.img_dy);
      this.veloc_y = 0;
      this.pulou = 0;
    } else if (this.img_y < (height - this.img_dy)) {
      this.img_y += this.veloc_y;
      this.veloc_y += this.gravidade;
    } else this.img_y += this.veloc_y;
  }
}