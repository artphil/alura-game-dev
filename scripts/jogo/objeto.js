class Objeto {
  constructor(imagem, x, y, escala) {
    this.imagem = imagem;

    // Posicao do personagem na tela
    this.img_x = x;
    this.img_y = y;
    this.img_y_base = y;
    this.escala = escala;

    // Tamanho do personagem na tela    
    this.dy = height * escala;
    this.dx = this.dy * this.imagem.sx / this.imagem.sy;

    // Velocidades
    this.veloc_x = width / 100;

    this.pisca = false;
    this.mostra = true;
  }

  desenha() {
    if (this.pisca) this.mostra = !this.mostra;
    else this.mostra = true;

    if (this.mostra)
      image(this.imagem.imagem, this.img_x, this.img_y, this.dx, this.dy,
        this.imagem.posicoes[this.imagem.atual][0], this.imagem.posicoes[this.imagem.atual][1], this.imagem.sx, this.imagem.sy);

    return this.anima();
  }

  anima() {} // Deve ser implementado no filhos

  reset() {} // Deve ser implementado no filhos
}