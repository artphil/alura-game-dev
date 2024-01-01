class Inimigo extends Objeto {
  constructor(imagem, x, y, escala, fator) {
    super(imagem, x, y, escala)
    this.velocidade_fator = fator;
    this.x_inicial = x;
    this.na_tela = false;
  }

  anima() {
    if (velocidade_atual > 0){
      this.imagem.proximo();
    }
    this.img_x -= velocidade_atual / 2 * this.velocidade_fator;

    if (this.img_x > 0)
      return 1;
    else
      return 0;
  }

  aparece(fator) {
    this.img_x = width;
    this.velocidade_fator = fator;
  }

  reset() {
    this.img_x = this.x_inicial;
  }

}