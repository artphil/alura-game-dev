class Inimigo extends Objeto {
  constructor(imagem, linhas, colunas, x, y, escala, velocidade) {
    super(imagem, linhas, colunas, x, y, escala)
    this.veloc_x = velocidade;
  }

  anima() {
    this.atual = (this.atual + 1) % this.posicoes.length;
    if (this.img_x > 0) this.img_x -= this.veloc_x;
    else this.img_x = width;
  }

  acelera(valor) {
    this.veloc_x += valor;
  }
}