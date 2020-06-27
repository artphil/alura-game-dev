class Cenario {
  constructor(imagem, velocidade) {
    this.imagem = imagem;
    this.imagem_atual = 0;
    this.fases = imagem.length;
    this.camadas = imagem[0].length;
    this.velocidade = velocidade;
    this.imagem1_x = [];
    this.imagem2_x = [];
    for (let i = 0; i < this.camadas; i++) {
      this.imagem1_x.push(0);
      this.imagem2_x.push(width);
    }
    this.imagem_y = 0;
    this.dy_personagem = 0;
    this.fator_y = 0.9;
    this.altura = this.imagem[0][0].height * (1 - this.fator_y)
    this.deslocamento = this.imagem[0][0].height * this.fator_y;
  }

  desenha_fundo() {
    image(this.imagem[this.imagem_atual][0], this.imagem1_x[0], this.imagem_y, width, height);
    image(this.imagem[this.imagem_atual][0], this.imagem2_x[0], this.imagem_y, width, height);
    for (let i = 1; i < this.camadas - 1; i++) {
      let posicao = this.altura - (this.dy_personagem / 4 ** i);

      image(this.imagem[this.imagem_atual][i],
        this.imagem1_x[i], this.imagem_y,
        width, height,
        0, posicao,
        this.imagem[this.imagem_atual][i].width, this.deslocamento);
      image(this.imagem[this.imagem_atual][i],
        this.imagem2_x[i], this.imagem_y,
        width, height,
        0, posicao,
        this.imagem[this.imagem_atual][i].width, this.deslocamento);
    }

    this.move()
  }

  desenha_frente() {
    image(this.imagem[this.imagem_atual][this.camadas - 1],
      this.imagem1_x[this.camadas - 1], this.imagem_y, width, height);

    image(this.imagem[this.imagem_atual][this.camadas - 1],
      this.imagem2_x[this.camadas - 1], this.imagem_y, width, height);
  }

  move() {
    for (let i = 0; i < this.camadas; i++) {
      this.imagem1_x[i] -= velocidade_atual / 2 ** (this.camadas - i);
      this.imagem2_x[i] -= velocidade_atual / 2 ** (this.camadas - i);

      if (this.imagem1_x[i] < -width) this.imagem1_x[i] = this.imagem2_x[i] + width;
      if (this.imagem2_x[i] < -width) this.imagem2_x[i] = this.imagem1_x[i] + width;
    }
  }

  acelera(valor) {
    if (velocidade_atual > 0)
      velocidade_atual += valor;
  }

  muda_cenario() {
    // console.log(this.imagem_atual, this.fases, (this.imagem.atual + 1) % this.fases);
    this.imagem_atual = (this.imagem_atual + 1) % this.fases;
  }

  reset() {
    this.imagem_atual = 0;
  }
}