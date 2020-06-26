class Personagem extends Objeto {
  constructor(imagem, x, y) {
    super(imagem, x, y)

    this.veloc_y = 0;
    this.gravidade = height / 150;
    this.pulou = 0;
  }

  anima() {
    if (velocidade_atual > 0 && this.pulou === 0)
      this.imagem.atual = (this.imagem.atual + 1) % this.imagem.posicoes.length;
    else this.imagem.atual = 0;
    this.acao_gravidade()
  }

  acao_gravidade() {
    if (velocidade_atual > 0) {
      if (this.img_y > this.img_y_base) {
        this.img_y = this.img_y_base;
        this.veloc_y = 0;
        this.pulou = 0;
      } else if (this.img_y < this.img_y_base) {
        this.img_y += this.veloc_y;
        this.veloc_y += this.gravidade;
      } else this.img_y += this.veloc_y;
    }
  }

  altura() {
    let altura = this.img_y_base - this.img_y;
    // console.log(altura);
    return altura;

  }

  direita() {
    if (velocidade_atual > 0)
      if (this.img_x < (width - this.imagem.dx))
        this.img_x += this.veloc_x;
  }

  esquerda() {
    if (velocidade_atual > 0)
      if (this.img_x > 0)
        this.img_x -= this.veloc_x;
  }

  pula() {
    if (velocidade_atual > 0 && this.pulou < 2) {
      efeito_pulo.play();
      this.veloc_y = -(height / 15);
      this.pulou++;
    }
  }

  colide(inimigos) {
    let colidiu = false;
    // noFill();
    // circle(this.img_x+(this.imagem.dx/2),this.img_y+(this.imagem.dy/2),this.imagem.dy/2);

    inimigos.forEach(inimigo => {
      // circle(inimigo.img_x+(inimigo.imagem.dx/2),inimigo.img_y+(inimigo.imagem.dy/2),inimigo.imagem.dy/2);

      if (collideCircleCircle(
          this.img_x + (this.imagem.dx / 2),
          this.img_y + (this.imagem.dy / 2),
          this.imagem.dy / 2,
          inimigo.img_x + (inimigo.imagem.dx / 2),
          inimigo.img_y + (inimigo.imagem.dy / 2),
          inimigo.imagem.dy / 2)) {
        // console.log('collide')
        colidiu = true;
      }
    });
    return colidiu;
  }

  reset() {
    this.img_x = 0;
    this.img_y = this.img_y_base
  }

}