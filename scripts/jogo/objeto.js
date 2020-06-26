class Objeto {
  constructor(imagem, x, y) {
    this.imagem = imagem;

    // Posicao do personagem na tela
    this.img_x = x;
    this.img_y = y;
    this.img_y_base = y;

    // Velocidades
    this.veloc_x = width / 100;
  }

  desenha() {
    image(this.imagem.imagem, this.img_x, this.img_y, this.imagem.dx, this.imagem.dy,
    this.imagem.posicoes[this.imagem.atual][0], this.imagem.posicoes[this.imagem.atual][1],
    this.imagem.sx, this.imagem.sy);
    
    return this.anima();
  }

  anima() {} // Deve ser implementado no filhos

}