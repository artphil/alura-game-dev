class Personagem extends Objeto {
  constructor(imagem, x, y, escala) {
    super(imagem, x, y, escala)

    this.veloc_y = 0;
    this.gravidade = height / 150;
    this.pulou = 0;
    this.invencivel = false;
  }

  anima() {
    if (velocidade_atual === 0) return 0;

    if (this.pulou === 0) {
      this.imagem.proximo();
    } else {
      this.imagem.atual = 0;
    }

    this.acao_gravidade()

    this.pisca = this.invencivel;
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
    // if (velocidade_atual > 0)
    //   if (this.img_x < (width - this.dx))
    //     this.img_x += this.veloc_x;
  }

  esquerda() {
    // if (velocidade_atual > 0)
    //   if (this.img_x > 0)
    //     this.img_x -= this.veloc_x;
  }

  pula() {
    if (velocidade_atual > 0 && this.pulou < 2) {
      efeito_pulo.play();
      this.veloc_y = -(height / 15);
      this.pulou++;
    }
  }

  colide(enemies) {
    if (velocidade_atual === 0)
      return false;

    let colidiu = false;

    // console.log(this.invencivel);
    if (this.invencivel)
      return false;


    let colisor = false;
    let precisao = 0.7;

    if (colisor) {
      circle(this.img_x + (this.dx * precisao), this.img_y + (this.dy * precisao), this.dy * precisao);
    }
    enemies.forEach(inimigo => {
      if (colisor)
        circle(inimigo.img_x + (inimigo.dx * precisao), inimigo.img_y + (inimigo.dy * precisao), inimigo.dy * precisao);

      if (collideCircleCircle(
        this.img_x + (this.dx * precisao),
        this.img_y + (this.dy * precisao),
        this.dy * precisao,
        inimigo.img_x + (inimigo.dx * precisao),
        inimigo.img_y + (inimigo.dy * precisao),
        inimigo.dy * precisao)) {
        // console.log('collide')
        colidiu = true;
      }
    });
    return colidiu;
  }

  reset() {
    this.img_x = width / 3;
    this.img_y = this.img_y_base
    this.invencivel = false;
  }

  fica_invencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1000);
  }

}