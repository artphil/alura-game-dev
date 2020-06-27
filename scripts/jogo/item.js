class Item extends Objeto {
  constructor(imagem, x, y, escala) {
    super(imagem, x, y, escala)
    this.x_inicial = x;
    this.animar = true;
    this.mover = true;
  }

  anima() {
    if (velocidade_atual > 0) {
      if (this.animar) {
        this.imagem.proximo();
      }
      if (this.mover) {
        this.img_x -= velocidade_atual;
      }
    }

  }

  aparece(altura) {
    this.img_x = width;
    this.img_y = altura;
  }

  reset() {
    this.img_x = this.x_inicial;
  }

}