class Personagem extends Objeto {
  constructor(imagem, linhas, colunas, x, y, escala) {
    super(imagem, linhas, colunas, x, y, escala)
  }

  direita() {
    if (this.img_x < (width - this.img_dx)) this.img_x += this.veloc_x;
  }

  esquerda() {
    if (this.img_x > 0) this.img_x -= this.veloc_x;
  }

  pula() {
    if (this.pulou < 2) {
      this.veloc_y = -(height / 15);
      this.pulou++;
    }
  }

  colide(inimigos) {
    noFill();
    circle(this.img_x + (this.img_dx / 2),
      this.img_y + (this.img_dy / 2),
      this.img_dx)
    for (let i = 0; i < inimigos.length; i++) {
      circle(inimigos[i].img_x + (inimigos[i].img_dx / 2),
        inimigos[i].img_y + (inimigos[i].img_dy / 2),
        inimigos[i].img_dx)
      if (collideCircleCircle(this.img_x + (this.img_dx / 2),
          this.img_y + (this.img_dy / 2),
          this.img_dx,
          inimigos[i].img_x + (inimigos[i].img_dx / 2),
          inimigos[i].img_y + (inimigos[i].img_dy / 2),
          inimigos[i].img_dx))

        return true;
    }
    return false;
  }
}