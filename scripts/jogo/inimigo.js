class Inimigo extends Objeto {
  constructor(imagem, x, y, fator) {
    super(imagem, x, y)
    this.velocidade_fator = fator;
    this.x_inicial = x;
  }

  anima() {
    if (velocidade_atual > 0)
      this.imagem.atual = (this.imagem.atual + 1) % this.imagem.posicoes.length;
    this.img_x -= velocidade_atual/2 * this.velocidade_fator;

    if (this.img_x > 0)
      return 1;
    else
      return 0;
  }

  aparece(fator) {
    this.img_x = width;
    this.velocidade_fator = fator;
  }
  
  reset()
  {
    this.img_x = this.x_inicial;
  }

}